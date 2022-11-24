import { Fragment, useEffect, useState } from "react";

import { ItemList } from "../../../../contexts/PurchaseListContext";
import { ItemListContainer } from "../../../Home/components/ItemList/styles";
import { HistoryItem } from "./HistoryItem";

interface HistoryItemListProps {
    items: ItemList[];
}

export function HistoryItemList({ items }: HistoryItemListProps) {
	const [categories, setCategories] = useState<string[]>([]);
	
	useEffect(() => {
		if (items.length > 0) {
			const arr = [...new Set(items.map((item) => item.item.category))];
			setCategories(arr);
		}
	}, [items]);

    return (
        <ItemListContainer>
            {categories.map((category) => (
				<Fragment key={category}>
					<h2>{category}</h2>
					<ul>
						{items.filter(item => item.item.category === category).map(item => (
							<HistoryItem key={item.item._id} item={item} />
						))}
					</ul>
				</Fragment>
			))}
        </ItemListContainer>
    );
}