import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { ItemListDb } from "./PurchaseListContext";

interface History {
    history: ItemListDb[];
}

export const HistoryContext = createContext({} as History);

interface ProductsContextProviderProps {
    children: ReactNode;
}

const API_URL = `${import.meta.env.VITE_API_URL}/ShoppingList/`;

export function HistoryContextProvider({ children }: ProductsContextProviderProps) {
    const { getToken } = useAuth();
	const token = getToken();
	const axiosInstance =  axios.create({
		baseURL: API_URL,
		headers: {
			'Authorization': `Bearer ${token}`,
		}
	});

    const [ history, setHistory ] = useState<ItemListDb[]>([]);

    async function getHistory() {
        await axiosInstance.get('/').then(response => {
            setHistory(response.data.data.data);
        });
    }

    useEffect(() => {
        getHistory();
    }, []);

    return (
		<HistoryContext.Provider value={{ history }}>
			{children}
		</HistoryContext.Provider>
	);
}