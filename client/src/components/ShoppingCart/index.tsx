import { AddItem } from "./AddItem";
import { ShoppingCartContainer } from "./styles";
import cart from '../../assets/cart.svg';

export function ShoppingCart() {
	return (
		<ShoppingCartContainer>
			<AddItem />
			<h3>No items</h3>
			<img src={cart} alt="Woman purchasing items" />
		</ShoppingCartContainer>
	);
}