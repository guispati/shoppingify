import { Plus } from "phosphor-react";
import { ItemContainer } from "./styles";

export function Item() {
	return (
		<ItemContainer>
			<span>Pre-cooked corn 450g</span>
			<Plus size={20} weight="bold" />
		</ItemContainer>
	);
}