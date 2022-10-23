import { AddItemContainer } from "./styles";
import bottle from '../../../assets/bottle.svg';

export function AddItem() {
	function handleAddItem() {
		console.log("click");
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