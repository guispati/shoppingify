import { ArrowLeft } from "phosphor-react";

import { useSidebar } from "../../../hooks/useSidebar";
import { FormButtons } from "../components/FormButtons/styles";
import { ItemGroup } from "./ItemGroup";
import { ItemDetailsContainer, ItemDetailsInfo } from "./styles";

export function ItemDetails() {
	const { itemDetail, openDifferentPage } = useSidebar();

	function handleBackButton() {
		openDifferentPage('shopping-cart');
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
				<input type='reset' value="delete" />
				<input type='submit' value="Add to list" />
			</FormButtons>
		</ItemDetailsContainer>	
	);
}