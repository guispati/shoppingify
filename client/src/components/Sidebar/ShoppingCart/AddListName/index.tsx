import { AddListNameContainer, Input } from "./styles";

interface AddListNameProps {
	disabled?: boolean;
}

export function AddListName({ disabled=false }: AddListNameProps) {
	return (
		<AddListNameContainer>
			<div>
				<Input type="text" placeholder="Enter a name" disabled={disabled} />
				<button disabled={disabled}>Save</button>
			</div>
		</AddListNameContainer>
	);
}