import { createContext, ReactNode, useEffect, useState } from "react";

interface Item {
	isNavbarOpen: boolean;
	handleToggleNavbar: () => void;
	actualPage: 'shopping-cart' | 'new-item' | 'details';
	openDifferentPage: (newPage: 'shopping-cart' | 'new-item' | 'details') => void;
}

export const SidebarContext = createContext({} as Item);

interface SidebarContextProviderProps {
	children: ReactNode;
}

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(true);
	const [actualPage, setActualPage] = useState<'shopping-cart' | 'new-item' | 'details'>('shopping-cart');

	function handleToggleNavbar() {
		setIsNavbarOpen((state) => {
			return !state;
		});
	}

	function openDifferentPage(newPage: 'shopping-cart' | 'new-item' | 'details') {
		setActualPage(newPage);
	}

	useEffect(() => {
		
	}, []);

	return (
		<SidebarContext.Provider value={{ isNavbarOpen, handleToggleNavbar, actualPage, openDifferentPage }}>
			{children}
		</SidebarContext.Provider>
	);
}