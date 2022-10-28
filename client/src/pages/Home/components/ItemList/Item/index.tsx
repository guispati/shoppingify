import { Plus } from "phosphor-react";
import { ItemSummaryInterface } from "../../../../../contexts/ItemContext";
import { useItem } from "../../../../../hooks/useItem";
import { useSidebar } from "../../../../../hooks/useSidebar";
import { ItemContainer } from "./styles";

interface ItemProps {
	item: ItemSummaryInterface;
}

export function Item({ item }: ItemProps) {
	const { getItemById } = useItem();
	const { openItemDetail } = useSidebar();

	function handleClickOpenDetails() {
		
		getItemById(item._id).then(data => {
			openItemDetail(data);
		})
	}

	return (
		<ItemContainer onClick={handleClickOpenDetails}>
			<span>{item.name}</span>
			<Plus size={20} weight="bold" />
		</ItemContainer>
	);
}