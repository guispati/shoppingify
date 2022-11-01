import { Minus, Plus, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { ItemList } from "../../../../contexts/PurchaseListContext";
import { usePurchaseList } from "../../../../hooks/usePurchaseList";
import { Quantity } from "./Quantity";
import { CartItemContainer, QuantityModifierContainer, TrashContainer } from "./styles";

interface CartItemProps {
	cartItem: ItemList;
}

export function CartItem({ cartItem }: CartItemProps) {
	const [quantityModifier, setQuantityModifier] = useState(false);
	const { changeQuantityOnCart, removeItemFromCart } = usePurchaseList();

	function toggleQuantityModifier() {
		setQuantityModifier(!quantityModifier);
	}

	function handleAddItem() {
		changeQuantityOnCart(cartItem.item, cartItem.quantity+1);
	}

	function handleSubItem() {
		changeQuantityOnCart(cartItem.item, cartItem.quantity-1);
	}

	function handleDeleteItem() {
		removeItemFromCart(cartItem.item);
	}

	return (
		<CartItemContainer>
			<span>{cartItem.item.name}</span>

			{quantityModifier ? (
				<QuantityModifierContainer>
					<TrashContainer onClick={handleDeleteItem}>
						<TrashSimple size={14} weight="bold" />
					</TrashContainer>
					<Minus weight="bold" size={14} onClick={handleSubItem} />
					<Quantity onClick={toggleQuantityModifier} quantity={cartItem.quantity} />
					<Plus weight="bold" size={14} onClick={handleAddItem} />
				</QuantityModifierContainer>
			) : (
				<Quantity onClick={toggleQuantityModifier} quantity={cartItem.quantity} />
			)}
		</CartItemContainer>
	);
}