import axios from "axios";
import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface ItemInterface {
	name: string;
	image?: string;
	note?: string;
	category: string;
}

interface Item {
	items: ItemInterface[];
	createItem: (formData: FormData) => Promise<void>;
	getCategories: () => Promise<string[]>;
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

	const createItem = async (form: FormData) => {
		await axiosInstance.post("/", form).then(response => {
			setItems(produce(draft => {
				draft.push(response.data.data.data);
			}));
		});
	}

	const getCategories = async () => {
		var res = await axiosInstance.get("/categories");
		return res.data.data.data;
	}

	useEffect(() => {
		getAllItems();
	}, [])

	return (
		<ItemContext.Provider value={{ items, createItem, getCategories }}>
			{children}
		</ItemContext.Provider>
	);
}