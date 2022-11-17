import { useEffect, useState } from "react";
import { ItemList } from "../../../../contexts/PurchaseListContext";
import { CartItem } from "../CartItem";
import { CategorySectionList } from "./styles";

interface ShoppingCartListProps {
    cart: ItemList[];
    isEditingList?: boolean;
}

export function ShoppingCartList({ cart, isEditingList = false }: ShoppingCartListProps) {
	const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
		if (cart.length > 0) {
			const arr = [...new Set(cart.map((cartItem) => cartItem.item.category))];
			setCategories(arr);
		}
	}, [cart]);

    return (
        <>
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
        </>
    );
}