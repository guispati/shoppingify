import { useEffect, useState } from "react";
import { CalendarCheck, PencilSimple } from "phosphor-react";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AddItem } from "./AddItem";
import { AlertDialogAction, AlertDialogButtons, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle, CategorySectionList, EmptyCartContainer, ShoppingCartContainer } from "./styles";
import emptyCartImage from '../../../assets/cart.svg';
import { AddListName } from "./AddListName";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { CartItem } from "./CartItem";
import { FormButtons } from "../components/FormButtons/styles";

export function ShoppingCart() {
	const { cart, clearCart } = usePurchaseList();
	const [isEditingList, setIsEditingList] = useState(true);
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

	function handleCancelList() {
		clearCart();
	}

	function handleCompleteList() {
		
	}

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
						<a onClick={toggleEditList}>
							{isEditingList ? (
								<PencilSimple weight="fill" size={24} />
							) : (
								<CalendarCheck weight="bold" size={24} />
							)}
						</a>
					</h2>

					{categories.map((category) => (
						<CategorySectionList key={category}>
							<label>{category}</label>
							<ul>
								{cart.filter(cartItem => cartItem.item.category === category).map(cartItem => (
									<CartItem key={cartItem.item._id} cartItem={cartItem} isEditingList={isEditingList} />
								))}
							</ul>
						</CategorySectionList>
					))}
					
					{isEditingList ? (
						<AddListName />
					) : (
						<FormButtons>
							<AlertDialog.Root>
								<AlertDialog.Trigger asChild>
									<input type='reset' value="cancel" />
								</AlertDialog.Trigger>
								<AlertDialog.Portal>
									<AlertDialogOverlay />
									<AlertDialogContent>
										<AlertDialogTitle>Are you sure that you want to cancel this list?</AlertDialogTitle>
										<AlertDialogButtons>
											<AlertDialogCancel asChild>
												<input type='reset' value="cancel" />
											</AlertDialogCancel>
											<AlertDialogAction asChild>
												<input type='submit' value="Yes" onClick={handleCancelList} />
											</AlertDialogAction>
										</AlertDialogButtons>
									</AlertDialogContent>
								</AlertDialog.Portal>
							</AlertDialog.Root>
							<input type='submit' value="Complete" onClick={handleCompleteList} />
						</FormButtons>
					)}
				</ShoppingCartContainer>
			)}
		</>
	);
}