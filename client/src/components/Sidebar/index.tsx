import { useSidebar } from "../../hooks/useSidebar";
import { ItemDetails } from "./ItemDetails";
import { NewItem } from "./NewItem";
import { ShoppingCart } from "./ShoppingCart";
import { SidebarContainer } from "./styles";

export function Sidebar() {
	const { actualPage } = useSidebar();

	return (
		<SidebarContainer page={actualPage}>
			{actualPage === 'shopping-cart' && <ShoppingCart />}
			{actualPage === 'new-item' && <NewItem />}
			{actualPage === 'details' && <ItemDetails />}
		</SidebarContainer>
	);
}