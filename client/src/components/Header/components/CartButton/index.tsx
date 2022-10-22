import { Handbag, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartButtonContainer } from "./styles";

interface CartButtonProps {
    handleToggleCart: () => void
}

export function CartButton({ handleToggleCart }: CartButtonProps) {
    // const { cart } = useContext(PurchaseListContext);

    // const totalCartItens = cart.reduce((prev, current) => {
    //     return prev + +current.quantity;
    // }, 0);

	const totalCartItens = 1;

    return (
        <CartButtonContainer quantity={1} onClick={handleToggleCart}>
            <ShoppingCart size={20} weight="fill" />
        </CartButtonContainer>
    );
}