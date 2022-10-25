import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ItemProps {
	name: string;
	image?: string;
	note?: string;
	category: string;
}

interface Item {
	getAllItems: () => Promise<void>;
}

export const ItemContext = createContext({} as Item);

interface ItemContextProviderProps {
	children: ReactNode;
}

const API_URL = `${import.meta.env.VITE_API_URL}/items/`;
const token = localStorage.getItem("token");

export function ItemContextProvider({ children }: ItemContextProviderProps) {
	const axiosInstance =  axios.create({
		baseURL: API_URL,
		timeout: 5000,
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
			'Accept' : 'application/json',
		}
	}); 

	const getAllItems = async () => {
		await axiosInstance.get(API_URL).then(response => {
			console.log(response);
			return response.data;
		});
	}

	return (
		<ItemContext.Provider value={{ getAllItems }}>
			{children}
		</ItemContext.Provider>
	);
}