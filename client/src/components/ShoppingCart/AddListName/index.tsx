import { AddListNameContainer, Input } from "./styles";

export function AddListName() {
	return (
		<AddListNameContainer>
			<Input type="text" placeholder="Enter a name" disabled />
			<button disabled>Save</button>
		</AddListNameContainer>
	);
}