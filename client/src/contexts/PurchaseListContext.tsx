import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer';
import { ItemSummaryInterface } from "./ItemContext";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export type ItemList = {
    item: ItemSummaryInterface;
    quantity: number;
}

export type ItemListDb = {
	name: string;
	status: "completed" | "cancelled" | "active";
	items: {
		item: string;
		amount: number;
	}[];
}

interface PurchaseList {
    cart: ItemList[];
    addItemToCart: (item: ItemSummaryInterface) => void;
    changeQuantityOnCart: (item: ItemSummaryInterface, quantity: number) => void;
    removeItemFromCart: (item: ItemSummaryInterface) => void;
	savePurchaseList: (listName: string, status?: "completed" | "cancelled" | "active") => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

const API_URL = `${import.meta.env.VITE_API_URL}/ShoppingList/`;

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
	const { getToken } = useAuth();
	const token = getToken();
	const axiosInstance =  axios.create({
		baseURL: API_URL,
		headers: {
			'Authorization': `Bearer ${token}`,
		}
	});
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

	async function savePurchaseList(listName: string, status?: "completed" | "cancelled" | "active") {
		const newStatus = status ? status : "active";

		const list: ItemListDb = formatCartToDb(listName, newStatus);

		await axiosInstance.post(API_URL, list).then(() => {
			clearCart();
		});
	}

	function formatCartToDb(name: string, status: "completed" | "cancelled" | "active") {
		const list: ItemListDb = {
			name,
			status,
			items: cart.map(el => {
				return {
					item: el.item._id,
					amount: el.quantity,
				}
			}),
		}

		return list;
	}

    function clearCart() {
        setCart([]);
    }

	// useEffect(() => {
	// 	console.log(cart);
	// }, [cart]);
    
    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart, savePurchaseList }}>
            {children}
        </PurchaseListContext.Provider>
    );
}