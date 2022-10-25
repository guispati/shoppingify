import { AddItemContainer } from "./styles";
import bottle from '../../../../assets/bottle.svg';
import { useSidebar } from "../../../../hooks/useSidebar";

export function AddItem() {
	const { openDifferentPage } = useSidebar();

	function handleAddItem() {
		openDifferentPage('new-item');
	}
	return (
		<AddItemContainer>
			<img src={bottle} alt="Bottle" />
			<div>
				<p>Didn't find what you need?</p>
				<button onClick={handleAddItem}>Add item</button>
			</div>
		</AddItemContainer>
	);
}