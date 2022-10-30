import { AddItem } from "./AddItem";
import { EmptyCartContainer, ShoppingCartContainer } from "./styles";
import emptyCartImage from '../../../assets/cart.svg';
import { AddListName } from "./AddListName";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { CartItem } from "./CartItem";

export function ShoppingCart() {
	const { cart } = usePurchaseList();

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

					{cart.map(item => (
						<CartItem key={item.item._id} cartItem={item} />
					))}

					<AddListName />
				</ShoppingCartContainer>
			)}
		</>
	);
}