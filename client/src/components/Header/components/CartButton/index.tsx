import { ShoppingCart } from "phosphor-react";
import { usePurchaseList } from "../../../../hooks/usePurchaseList";
import { useSidebar } from "../../../../hooks/useSidebar";
import { CartButtonContainer } from "./styles";

export function CartButton() {
	const { handleToggleNavbar } = useSidebar();
	const { cart } = usePurchaseList();

    const totalCartItens = cart.reduce((prev, current) => {
        return prev + +current.quantity;
    }, 0);

	// const totalCartItens = 1;

    return (
        <CartButtonContainer quantity={totalCartItens} onClick={handleToggleNavbar}>
            <ShoppingCart size={20} weight="fill" />
        </CartButtonContainer>
    );
}