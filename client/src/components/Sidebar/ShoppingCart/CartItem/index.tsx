import { Check, Minus, Plus, TrashSimple } from "phosphor-react";
import { useState } from "react";

import { ItemList } from "../../../../contexts/PurchaseListContext";
import { usePurchaseList } from "../../../../hooks/usePurchaseList";
import { Quantity } from "./Quantity";
import { CartItemContainer, CheckboxContainer, CheckboxIndicator, LabelCheckbox, LabelWithCheckboxContainer, QuantityModifierContainer, TrashContainer } from "./styles";

interface CartItemProps {
	cartItem: ItemList;
	isEditingList: boolean;
}

export function CartItem({ cartItem, isEditingList }: CartItemProps) {
	const [quantityModifier, setQuantityModifier] = useState(false);
	const { changeQuantityOnCart, removeItemFromCart } = usePurchaseList();
	const [checked, setChecked] = useState<'indeterminate' | boolean>('indeterminate');


	function toggleQuantityModifier() {
		isEditingList && setQuantityModifier(!quantityModifier);
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
			{isEditingList ? (
				<label>{cartItem.item.name}</label>
			) : (
				<LabelWithCheckboxContainer>
					<CheckboxContainer id={cartItem.item.name} checked={checked} onCheckedChange={setChecked} >
						<CheckboxIndicator>
							{checked === true && <Check size={24} weight="bold" />}
						</CheckboxIndicator>
					</CheckboxContainer>
					<LabelCheckbox htmlFor={cartItem.item.name} checked={checked}>{cartItem.item.name}</LabelCheckbox>
				</LabelWithCheckboxContainer>
			)}
			
			

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