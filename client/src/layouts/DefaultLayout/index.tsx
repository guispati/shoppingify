import { Header } from "../../components/Header";
import { ItemContextProvider } from "../../contexts/ItemContext";
import { PurchaseListContextProvider } from "../../contexts/PurchaseListContext";
import { SidebarContextProvider } from "../../contexts/SidebarContext";
import { Main } from "./Main";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
			<SidebarContextProvider>
				<PurchaseListContextProvider>
					<Header />
					<ItemContextProvider>
						<Main />
					</ItemContextProvider>
				</PurchaseListContextProvider>
			</SidebarContextProvider>
        </LayoutContainer>
    );
}