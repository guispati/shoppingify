import { ArrowLeft } from "phosphor-react";

import { ItemSummaryInterface } from "../../../contexts/ItemContext";
import { useItem } from "../../../hooks/useItem";
import { usePurchaseList } from "../../../hooks/usePurchaseList";
import { useSidebar } from "../../../hooks/useSidebar";
import { FormButtons } from "../components/FormButtons/styles";
import { ItemGroup } from "./ItemGroup";
import { ItemDetailsContainer, ItemDetailsInfo } from "./styles";

export function ItemDetails() {
	const { itemDetail, openPreviouslyPage } = useSidebar();
	const { deleteItem } = useItem();
	const { addItemToCart } = usePurchaseList();

	function handleBackButton() {
		openPreviouslyPage();
	}

	function handleDeleteItem() {
		deleteItem(itemDetail._id);
		openPreviouslyPage();
	}

	function handleAddItemToList() {
		const itemSummary: ItemSummaryInterface = {
			_id: itemDetail._id,
			name: itemDetail.name,
			category: itemDetail.category
		};
		addItemToCart(itemSummary);
		openPreviouslyPage();
	}

	return (
		<ItemDetailsContainer>
			<a onClick={handleBackButton}>
				<ArrowLeft size={24} />
				<span>back</span>
			</a>

			<ItemDetailsInfo>
				{itemDetail.image && (
					<img src={`${import.meta.env.VITE_PUBLIC_URL}/img/items/${itemDetail.image}`} />
				)}

				<ItemGroup label="name" content={itemDetail.name} title />
				<ItemGroup label="category" content={itemDetail.category} />
				{itemDetail.note && (
					<ItemGroup label="note" content={itemDetail.note} />
				)}
			</ItemDetailsInfo>


			<FormButtons>
				<input type='reset' value="delete" onClick={handleDeleteItem} />
				<input type='submit' value="Add to list" onClick={handleAddItemToList} />
			</FormButtons>
		</ItemDetailsContainer>	
	);
}