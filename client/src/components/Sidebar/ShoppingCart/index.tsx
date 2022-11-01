import { AddItem } from "./AddItem";
import { CategorySectionList, EmptyCartContainer, ShoppingCartContainer } from "./styles";
import emptyCartImage from '../../../assets/cart.svg';
import { AddListName } from "./AddListName";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { CartItem } from "./CartItem";
import { PencilSimple } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";

export function ShoppingCart() {
	const { cart } = usePurchaseList();
	const [isEditingList, setIsEditingList] = useState(false);
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		if (cart.length > 0) {
			const arr = [...new Set(cart.map((cartItem) => cartItem.item.category))];
			setCategories(arr);
		}
	}, [cart]);

	function toggleEditList() {
		setIsEditingList(!isEditingList);
	}

	return (
		<>
			{cart.length === 0 ? (
				<EmptyCartContainer>
					<AddItem />

					<h3>No items</h3>
					<img src={emptyCartImage} alt="Woman purchasing items" />

					<AddListName />
				</EmptyCartContainer>
			) : (
				<ShoppingCartContainer>
					<AddItem />

					<h2>
						Shopping list
						<a onClick={toggleEditList}>
							<PencilSimple weight="fill" size={20} />
						</a>
					</h2>

					{categories.map((category) => (
						<CategorySectionList key={category}>
							<label>{category}</label>
							<ul>
								{cart.filter(cartItem => cartItem.item.category === category).map(cartItem => (
									<CartItem key={cartItem.item._id} cartItem={cartItem} />
								))}
							</ul>
						</CategorySectionList>
					))}

					<AddListName />
				</ShoppingCartContainer>
			)}
		</>
	);
}