import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FullDateWithIcon } from "../../../components/FullDateWithIcon";
import { ItemList } from "../../../contexts/PurchaseListContext";
import { useHistory } from "../../../hooks/useHistory";
import { useSidebar } from "../../../hooks/useSidebar";
import { HistoryItemList } from "./HistoryItemList";
import { BackButton, Header, HistoryDetailContainer } from "./styles";

export function HistoryDetail() {
	const { openHistoryPage } = useSidebar();
	const { listId } = useParams();
	const { getHistoryById } = useHistory();
	const [items, setItems] = useState<ItemList[]>([]);

	useEffect(() => {
		getHistoryById(listId!).then(data => {
			setItems(data.items);
			openHistoryPage(data);
		});
	}, []);

	const dateFill = new Date(Date.now());

	return (
		<HistoryDetailContainer>
			<BackButton to="/history">
				<ArrowLeft size={16} />
				<span>back</span>
			</BackButton>

			<Header>
            	<h1>History Detail</h1>
				<FullDateWithIcon date={dateFill} />
			</Header>

			<HistoryItemList items={items} />
		</HistoryDetailContainer>
	);
}