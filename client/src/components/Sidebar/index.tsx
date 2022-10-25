import { useSidebar } from "../../hooks/useSidebar";
import { NewItem } from "./NewItem";
import { ShoppingCart } from "./ShoppingCart";
import { SidebarContainer } from "./styles";

export function Sidebar() {
	const { actualPage } = useSidebar();

	return (
		<SidebarContainer>
			{actualPage == 'shopping-cart' && <ShoppingCart />}
			{actualPage == 'new-item' && <NewItem />}
		</SidebarContainer>
	);
}