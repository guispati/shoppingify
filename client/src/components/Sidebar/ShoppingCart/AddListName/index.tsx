import { AddListNameContainer, Input } from "./styles";

export function AddListName() {
	return (
		<AddListNameContainer>
			<div>
				<Input type="text" placeholder="Enter a name" disabled />
				<button disabled>Save</button>
			</div>
		</AddListNameContainer>
	);
}