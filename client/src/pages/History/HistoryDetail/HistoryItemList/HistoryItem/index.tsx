import { ItemList } from "../../../../../contexts/PurchaseListContext";
import { HistoryItemContainer } from "./styles";

interface HistoryItemProps {
	item: ItemList;
}

export function HistoryItem({ item }: HistoryItemProps) {
    return (
        <HistoryItemContainer>
            <p>{item.item.name}</p>
			<span>{item.amount} pcs</span>
        </HistoryItemContainer>
    );
}