import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemDetailsInterface } from "./ItemContext";
import { useLocation } from 'react-router-dom';
import { HistoryDetails } from "./HistoryContext";
import { usePrevious } from "../hooks/usePrevious";

export type pageOptions = 'shopping-cart' | 'history-cart' | 'new-item' | 'details';

interface Item {
	isNavbarOpen: boolean;
	handleToggleNavbar: () => void;
	actualPage: pageOptions;
	openDifferentPage: (newPage: pageOptions) => void;
	openItemDetail: (item: ItemDetailsInterface) => void;
	itemDetail: ItemDetailsInterface;
	historyCart: HistoryDetails;
	openHistoryPage: (item: HistoryDetails) => void;
	openPreviouslyPage: () => void;
}

export const SidebarContext = createContext({} as Item);

interface SidebarContextProviderProps {
	children: ReactNode;
}

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(true);
	const [actualPage, setActualPage] = useState<pageOptions>('shopping-cart');
	const [itemDetail, setItemDetail] = useState<ItemDetailsInterface>({} as ItemDetailsInterface);
	const [historyCart, setHistoryCart] = useState<HistoryDetails>({} as HistoryDetails);
	const location = useLocation();
	const previousPage: pageOptions = usePrevious(actualPage);

	function handleToggleNavbar() {
		setIsNavbarOpen((state) => {
			return !state;
		});
	}

	function openDifferentPage(newPage: pageOptions) {
		setActualPage(newPage);
	}

	function openItemDetail(item: ItemDetailsInterface) {
		setItemDetail(item);
		setActualPage('details');
	}

	function openHistoryPage(list: HistoryDetails) {
		setHistoryCart(list);
		setActualPage('history-cart');
	}

	function checkHistoryDetailsPage(loc: string) {
		const regex = new RegExp('^/history/[a-zA-Z0-9._:$!%-]+$')
		if (!loc.match(regex)) {
			openDifferentPage('shopping-cart');
			setHistoryCart({} as HistoryDetails);
		}
	}

	function openPreviouslyPage() {
		openDifferentPage(previousPage);
	}

	useEffect(() => {
		checkHistoryDetailsPage(location.pathname);
	}, [location]);

	return (
		<SidebarContext.Provider value={{ isNavbarOpen, handleToggleNavbar, actualPage, openDifferentPage, openItemDetail, itemDetail, historyCart, openHistoryPage, openPreviouslyPage }}>
			{children}
		</SidebarContext.Provider>
	);
}