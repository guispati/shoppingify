import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemDetailsInterface } from "./ItemContext";

interface Item {
	isNavbarOpen: boolean;
	handleToggleNavbar: () => void;
	actualPage: 'shopping-cart' | 'new-item' | 'details';
	openDifferentPage: (newPage: 'shopping-cart' | 'new-item' | 'details') => void;
	openItemDetail: (item: ItemDetailsInterface) => void;
	itemDetail: ItemDetailsInterface;
}

export const SidebarContext = createContext({} as Item);

interface SidebarContextProviderProps {
	children: ReactNode;
}

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(true);
	const [actualPage, setActualPage] = useState<'shopping-cart' | 'new-item' | 'details'>('shopping-cart');
	const [itemDetail, setItemDetail] = useState<ItemDetailsInterface>({} as ItemDetailsInterface);

	function handleToggleNavbar() {
		setIsNavbarOpen((state) => {
			return !state;
		});
	}

	function openDifferentPage(newPage: 'shopping-cart' | 'new-item' | 'details') {
		setActualPage(newPage);
	}

	function openItemDetail(item: ItemDetailsInterface) {
		setItemDetail(item);
		setActualPage('details');
	}

	useEffect(() => {
		
	}, []);

	return (
		<SidebarContext.Provider value={{ isNavbarOpen, handleToggleNavbar, actualPage, openDifferentPage, openItemDetail, itemDetail }}>
			{children}
		</SidebarContext.Provider>
	);
}