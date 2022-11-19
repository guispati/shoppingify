import { ItemList } from "../../../../../contexts/PurchaseListContext";
import { useItem } from "../../../../../hooks/useItem";
import { useSidebar } from "../../../../../hooks/useSidebar";
import { HistoryItemContainer } from "./styles";

interface HistoryItemProps {
	item: ItemList;
}

export function HistoryItem({ item }: HistoryItemProps) {
    const { getItemById } = useItem();
	const { openItemDetail } = useSidebar();

	function handleClickOpenDetails() {
		getItemById(item.item._id).then(data => {
			openItemDetail(data);
		})
	}

    return (
        <HistoryItemContainer onClick={handleClickOpenDetails}>
            <p>{item.item.name}</p>
			<span>{item.amount} pcs</span>
        </HistoryItemContainer>
    );
}