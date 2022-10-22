import { Item } from "./Item";
import { ItemListContainer } from "./styles";

export function ItemList() {
	return (
		<ItemListContainer>
			<h2>Fruits and vegetables</h2>
			<ul>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</ul>

			<h2>Meat and Fish</h2>
			<ul>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</ul>
		</ItemListContainer>
	);
}