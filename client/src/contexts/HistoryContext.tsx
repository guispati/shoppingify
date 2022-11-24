import { createContext, ReactNode, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { ItemList, ListStatus } from "./PurchaseListContext";

export interface HistoryList {
    _id: string;
    name: string;
	status: ListStatus;
    createdAt: Date,
}

export interface HistoryDetails {
    _id: string;
    name: string;
	status: ListStatus;
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

const ENDPOINT = 'ShoppingList/';

export function HistoryContextProvider({ children }: ProductsContextProviderProps) {
    const { doAuthenticatedRequest } = useAuth();
	const axiosInstance = doAuthenticatedRequest(ENDPOINT);

    const [ history, setHistory ] = useState<HistoryList[]>([]);

    async function getHistory() {
        await axiosInstance!.get('/').then(response => {
            setHistory(response.data.data.data);
        });
    }

    async function getHistoryById(id: string) {
        var res = await axiosInstance!.get(`/${id}`);
		return res.data.data.data;
    }

    useEffect(() => {
        getHistory();
    }, [history]);

    return (
		<HistoryContext.Provider value={{ history, getHistoryById }}>
			{children}
		</HistoryContext.Provider>
	);
}