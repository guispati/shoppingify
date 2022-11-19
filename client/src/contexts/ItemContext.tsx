import axios from "axios";
import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export interface ItemSummaryInterface {
	_id: string;
	name: string;
	category: string;
}

export interface ItemDetailsInterface {
	_id: string;
	name: string;
	image?: string;
	note?: string;
	category: string;
}

interface Item {
	items: ItemSummaryInterface[];
	createItem: (formData: FormData) => Promise<void>;
	getCategories: () => Promise<string[]>;
	getItemById: (id: string) => Promise<ItemDetailsInterface>;
	deleteItem: (id: string) => Promise<void>;
}

export const ItemContext = createContext({} as Item);

interface ItemContextProviderProps {
	children: ReactNode;
}

const ENDPOINT = 'items/';

export function ItemContextProvider({ children }: ItemContextProviderProps) {
	const { doAuthenticatedRequest } = useAuth();
	const axiosInstance = doAuthenticatedRequest(ENDPOINT);

	const [items, setItems] = useState<ItemSummaryInterface[]>([]);

	const getAllItems = async () => {
		await axiosInstance!.get("/").then(response => {
			setItems(response.data.data.data);
		});
	}

	const createItem = async (form: FormData) => {
		await axiosInstance!.post("/", form).then(response => {
			setItems(produce(draft => {
				draft.push(response.data.data.data);
			}));
		});
	}

	const getCategories = async () => {
		var res = await axiosInstance!.get("/categories");
		return res.data.data.data;
	}

	const getItemById = async (id: string) => {
		var res = await axiosInstance!.get(`/${id}`);
		return res.data.data.data;
	}

	const deleteItem = async(id: string) => {
		const index = items.findIndex(item => item._id === id);
		await axiosInstance!.delete(`/${id}`).then(() => {
			setItems(produce(draft => {
				draft.splice(index, 1);
			}));
		});
	}

	useEffect(() => {
		getAllItems();
	}, [])

	return (
		<ItemContext.Provider value={{ items, createItem, getCategories, getItemById, deleteItem }}>
			{children}
		</ItemContext.Provider>
	);
}