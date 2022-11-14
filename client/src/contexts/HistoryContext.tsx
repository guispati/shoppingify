import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { ItemDetailsInterface } from "./ItemContext";
import { ItemList } from "./PurchaseListContext";

export interface HistoryList {
    _id: string;
    name: string;
	status: "completed" | "cancelled" | "active";
    createdAt: Date,
}

export interface HistoryDetails {
    _id: string;
    name: string;
	status: "completed" | "cancelled" | "active";
    createdAt: Date,
    items: ItemList[];
}

interface History {
    history: HistoryList[];
    getHistoryById: (id: string) => Promise<HistoryDetails>;
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

    const [ history, setHistory ] = useState<HistoryList[]>([]);

    async function getHistory() {
        await axiosInstance.get('/').then(response => {
            setHistory(response.data.data.data);
        });
    }

    async function getHistoryById(id: string) {
        var res = await axiosInstance.get(`/${id}`);
		return res.data.data.data;
    }

    useEffect(() => {
        getHistory();
    }, []);

    return (
		<HistoryContext.Provider value={{ history, getHistoryById }}>
			{children}
		</HistoryContext.Provider>
	);
}