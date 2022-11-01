import { Minus, Plus, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { ItemList } from "../../../../contexts/PurchaseListContext";
import { Quantity } from "./Quantity";
import { CartItemContainer, QuantityModifierContainer, TrashContainer } from "./styles";

interface CartItemProps {
	cartItem: ItemList;
}

export function CartItem({ cartItem }: CartItemProps) {
	const [quantityModifier, setQuantityModifier] = useState(false);

	function toggleQuantityModifier() {
		setQuantityModifier(!quantityModifier);
	}

	return (
		<CartItemContainer>
			<span>{cartItem.item.name}</span>

			{quantityModifier ? (
				<QuantityModifierContainer>
					<TrashContainer>
						<TrashSimple size={14} weight="bold" />
					</TrashContainer>
					<Minus weight="bold" size={14} />
					<Quantity onClick={toggleQuantityModifier} quantity={cartItem.quantity} />
					<Plus weight="bold" size={14} />
				</QuantityModifierContainer>
			) : (
				<Quantity onClick={toggleQuantityModifier} quantity={cartItem.quantity} />
			)}
		</CartItemContainer>
	);
}