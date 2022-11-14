import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer';
import { ItemSummaryInterface } from "./ItemContext";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export type ItemList = {
    item: ItemSummaryInterface;
    amount: number;
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
    setPurchaseList: (list: ItemList[]) => void;
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
                draft[itemPositionOnArray].amount += 1;
            }));
        } else {
            const newList = [...cart, { item, amount: 1 }];
            setCart(newList);
        }
    }

    function changeQuantityOnCart(item: ItemSummaryInterface, quantity: number) {
        const itemPositionOnArray = cart.findIndex(cartItem => cartItem.item._id === item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].amount = quantity;
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

		await axiosInstance.post('/', list).then(() => {
			clearCart();
		});
	}

    function setPurchaseList(list: ItemList[]) {
        setCart(list);
    }

    function saveCurrentPurchaseListInLocalStorage() {

    }

	function formatCartToDb(name: string, status: "completed" | "cancelled" | "active") {
		const list: ItemListDb = {
			name,
			status,
			items: cart.map(el => {
				return {
					item: el.item._id,
					amount: el.amount,
				}
			}),
		}

		return list;
	}

    function clearCart() {
        setCart([]);
    }
    
    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart, savePurchaseList, setPurchaseList }}>
            {children}
        </PurchaseListContext.Provider>
    );
}