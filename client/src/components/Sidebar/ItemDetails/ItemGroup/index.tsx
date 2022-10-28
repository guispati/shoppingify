import { ItemGroupContainer } from "./styles";

interface ItemGroupProps {
	label: string;
	content: string;
	title?: boolean;
}

export function ItemGroup({ label, content, title = false }: ItemGroupProps) {


	return (
		<ItemGroupContainer>
			<span>{label}</span>
			{title ? (
				<p><strong>{content}</strong></p>
			) : (
				<p>{content}</p>
			)}
		</ItemGroupContainer>
	);
}