import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer';
import { ItemSummaryInterface } from "./ItemContext";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "../hooks/useHistory";
import { useNavigate } from "react-router-dom";

export type ListStatus = "completed" | "cancelled" | "active";

export type ItemList = {
    item: ItemSummaryInterface;
    amount: number;
}

export type ItemListDb = {
    _id?: string;
	name: string;
	status?: ListStatus;
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
	savePurchaseList: (listName: string) => void;
    updateCartStatus: (id: string, status: ListStatus) => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

const ENDPOINT = 'shoppingList/';

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
	const { doAuthenticatedRequest } = useAuth();
	const axiosInstance = doAuthenticatedRequest(ENDPOINT);
    const [ cart, setCart ] = useState<ItemList[]>([]);
    const navigate = useNavigate();

    function addItemToCart(item: ItemSummaryInterface) {
        const itemPositionOnArray = findItemPositionOnArray(item._id);

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
        const itemPositionOnArray = findItemPositionOnArray(item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].amount = quantity;
            }));
        }
    }

    function removeItemFromCart(item: ItemSummaryInterface) {
        const itemPositionOnArray = findItemPositionOnArray(item._id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft.splice(itemPositionOnArray, 1);
            }));
        }
    }

    function findItemPositionOnArray(id: string) {
        return cart.findIndex(cartItem => cartItem.item._id === id);
    }

	async function savePurchaseList(listName: string) {
		const list: ItemListDb = formatCartToDb(listName);

		await axiosInstance!.post('/', list).then(() => {
			clearCart();
		});
	}

	function formatCartToDb(name: string, _id?: string) {
		const list: ItemListDb = {
			name,
			items: cart.map(el => {
				return {
					item: el.item._id,
					amount: el.amount,
				}
			}),
		}

		return list;
	}

    async function updateCartStatus(id: string, status: ListStatus) {
        await axiosInstance!.patch(`/${id}`, { status }).then(() => {
            navigate('/history');
        });
    }

    function clearCart() {
        setCart([]);
    }
    
    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart, savePurchaseList, updateCartStatus }}>
            {children}
        </PurchaseListContext.Provider>
    );
}