import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface ItemInterface {
	name: string;
	image?: string;
	note?: string;
	category: string;
}

interface Item {
	items: ItemInterface[];
}

export const ItemContext = createContext({} as Item);

interface ItemContextProviderProps {
	children: ReactNode;
}

const API_URL = `${import.meta.env.VITE_API_URL}/items/`;

export function ItemContextProvider({ children }: ItemContextProviderProps) {
	const tokenStoredInCookie = localStorage.getItem("token");
	let token;
	if (tokenStoredInCookie) {
		token = JSON.parse(tokenStoredInCookie);
	}
	const axiosInstance =  axios.create({
		baseURL: API_URL,
		timeout: 5000,
		headers: {
			'Authorization': `Bearer ${token}`,
		}
	});

	const [items, setItems] = useState<ItemInterface[]>([]);

	const getAllItems = async () => {
		await axiosInstance.get("/").then(response => {
			setItems(response.data.data.data);
		});
	}

	useEffect(() => {
		getAllItems();
	}, [])

	return (
		<ItemContext.Provider value={{ items }}>
			{children}
		</ItemContext.Provider>
	);
}