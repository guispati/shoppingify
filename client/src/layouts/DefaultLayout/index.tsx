import { Header } from "../../components/Header";
import { ItemContextProvider } from "../../contexts/ItemContext";
import { SidebarContextProvider } from "../../contexts/SidebarContext";
import { Main } from "./Main";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
			<SidebarContextProvider>
				<Header />
				<ItemContextProvider>
					<Main />
				</ItemContextProvider>
			</SidebarContextProvider>
        </LayoutContainer>
    );
}