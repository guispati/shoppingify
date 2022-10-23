import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ShoppingCart } from "../../components/ShoppingCart";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
			<ShoppingCart />
        </LayoutContainer>
    );
}