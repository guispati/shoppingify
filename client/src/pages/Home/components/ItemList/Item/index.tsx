import { Plus } from "phosphor-react";
import { ItemInterface } from "../../../../../contexts/ItemContext";
import { ItemContainer } from "./styles";

interface ItemProps {
	item: ItemInterface;
}

export function Item({ item }: ItemProps) {
	return (
		<ItemContainer>
			<span>{item.name}</span>
			<Plus size={20} weight="bold" />
		</ItemContainer>
	);
}