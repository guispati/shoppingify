import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useSidebar } from "../../../../hooks/useSidebar";
import { CartButtonContainer } from "./styles";

export function CartButton() {
	const { handleToggleNavbar } = useSidebar();
    // const { cart } = useContext(PurchaseListContext);

    // const totalCartItens = cart.reduce((prev, current) => {
    //     return prev + +current.quantity;
    // }, 0);

	const totalCartItens = 1;

    return (
        <CartButtonContainer quantity={totalCartItens} onClick={handleToggleNavbar}>
            <ShoppingCart size={20} weight="fill" />
        </CartButtonContainer>
    );
}