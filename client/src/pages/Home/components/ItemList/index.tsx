import { Fragment, useEffect, useState } from "react";
import { useItem } from "../../../../hooks/useItem";
import { Item } from "./Item";
import { ItemListContainer } from "./styles";

export function ItemList() {
	const { items } = useItem();
	const [categories, setCategories] = useState<string[]>([]);
	
	useEffect(() => {
		if (items.length > 0) {
			const arr = [...new Set(items.map((item) => item.category))];
			setCategories(arr);
		}
	}, [items]);

	return (
		<ItemListContainer>
			{categories.map((category) => (
				<Fragment key={category}>
					<h2>{category}</h2>
					<ul>
						{items.filter(item => item.category === category).map(item => (
							<Item key={item._id} item={item} />
						))}
					</ul>
				</Fragment>
			))}
		</ItemListContainer>
	);
}