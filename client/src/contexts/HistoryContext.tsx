import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";

export interface HistoryList {
    _id: string;
    name: string;
	status: "completed" | "cancelled" | "active";
    createdAt: Date,
}

interface History {
    history: HistoryList[];
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

    useEffect(() => {
        getHistory();
    }, []);

    return (
		<HistoryContext.Provider value={{ history }}>
			{children}
		</HistoryContext.Provider>
	);
}