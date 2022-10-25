import { useEffect } from "react";
import { useItem } from "../../../../hooks/useItem";
import { Item } from "./Item";
import { ItemListContainer } from "./styles";

export function ItemList() {
	// const { getAllItems } = useItem();
	// console.log(getAllItems);

	// useEffect(() => {
	// 	getAllItems().then(() => {
	// 		console.log('oi');
	// 	});
	// }, [])

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