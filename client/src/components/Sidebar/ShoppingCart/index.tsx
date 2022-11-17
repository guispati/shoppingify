import { useEffect, useState } from "react";
import { PencilSimple } from "phosphor-react";

import { AddItem } from "../components/AddItem";
import emptyCartImage from '../../../assets/cart.svg';
import { AddListName } from "./AddListName";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { EmptyCartContainer, ShoppingCartContainer } from "./styles";
import { ShoppingCartList } from "../components/ShoppingCartList";

export function ShoppingCart() {
	const { cart } = usePurchaseList();

	return (
		<>
			{cart.length === 0 ? (
				<EmptyCartContainer>
					<AddItem />

					<h3>No items</h3>
					<img src={emptyCartImage} alt="Woman purchasing items" />

					<AddListName disabled />
				</EmptyCartContainer>
			) : (
				<ShoppingCartContainer>
					<AddItem />
		
					<h2>
						Shopping list
						<a>
							<PencilSimple weight="fill" size={24} />
						</a>
					</h2>
		
					<ShoppingCartList cart={cart} isEditingList />
		
					<AddListName />
				</ShoppingCartContainer>
			)}
		</>
	);
}