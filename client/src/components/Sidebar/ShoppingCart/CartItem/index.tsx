import { ItemList } from "../../../../contexts/PurchaseListContext";
import { CartItemContainer } from "./styles";

interface CartItemProps {
	cartItem: ItemList;
}

export function CartItem({ cartItem }: CartItemProps) {
	return (
		<CartItemContainer>
			<h1>{cartItem.item.name}</h1>
		</CartItemContainer>
	);
}