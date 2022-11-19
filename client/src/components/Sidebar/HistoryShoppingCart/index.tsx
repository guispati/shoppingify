import { CalendarCheck } from "phosphor-react";

import { ShoppingCartContainer } from "./styles";
import { ShoppingCartList } from "../components/ShoppingCartList";
import { CartActionButtons } from "./CartActionButtons";
import { AddItem } from "../components/AddItem";
import { useSidebar } from "../../../hooks/useSidebar";

export function HistoryShoppingCart() {
    const { historyCart } = useSidebar();

	return (
        <ShoppingCartContainer>
            <AddItem />

            <h2>
                {historyCart.name}
                <a>
                    <CalendarCheck weight="bold" size={24} />
                </a>
            </h2>

            <ShoppingCartList cart={historyCart.items} />

            <CartActionButtons id={historyCart._id} />
        </ShoppingCartContainer>
	);
}