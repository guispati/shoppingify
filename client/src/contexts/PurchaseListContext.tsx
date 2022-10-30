import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer';
import { ItemSummaryInterface } from "./ItemContext";

export type ItemList = {
    item: ItemSummaryInterface;
    quantity: number;
}

interface PurchaseList {
    cart: ItemList[];
    addItemToCart: (item: ItemSummaryInterface) => void;
    changeQuantityOnCart: (item: ItemSummaryInterface, quantity: number) => void;
    removeItemFromCart: (item: ItemSummaryInterface) => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
    const [ cart, setCart ] = useState<ItemList[]>([]);

    function addItemToCart(item: ItemSummaryInterface) {
        const itemPositionOnArray = cart.findIndex(cartItem => cartItem.item._id === item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity += 1;
            }));
        } else {
            const newList = [...cart, { item, quantity: 1 }];
            setCart(newList);
        }
    }

    function changeQuantityOnCart(item: ItemSummaryInterface, quantity: number) {
        const itemPositionOnArray = cart.findIndex(cartItem => cartItem.item._id === item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity = quantity;
            }));
        }
    }

    function removeItemFromCart(item: ItemSummaryInterface) {
        const itemPositionOnArray = cart.findIndex(cartItem => cartItem.item._id === item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft.splice(itemPositionOnArray, 1);
            }));
        }
    }

    function clearCart() {
        setCart([]);
    }

	useEffect(() => {
		console.log(cart);
	}, [cart]);
    
    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart }}>
            {children}
        </PurchaseListContext.Provider>
    );
}