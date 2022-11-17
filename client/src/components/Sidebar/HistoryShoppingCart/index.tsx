import { CalendarCheck } from "phosphor-react";

import { ShoppingCartContainer } from "./styles";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { ShoppingCartList } from "../components/ShoppingCartList";
import { CartActionButtons } from "./CartActionButtons";
import { AddItem } from "../components/AddItem";

export function HistoryShoppingCart() {
	const { cart } = usePurchaseList();

	return (
        <ShoppingCartContainer>
            <AddItem />

            <h2>
                Shopping list
                <a>
                    <CalendarCheck weight="bold" size={24} />
                </a>
            </h2>

            <ShoppingCartList cart={cart} />

            <CartActionButtons />
        </ShoppingCartContainer>
	);
}