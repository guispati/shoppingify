import { QuantityContainer } from "./styles";

interface QuantityProps {
	quantity: number;
	onClick: () => void;
}

export function Quantity({ quantity, onClick }: QuantityProps) {
	function handleQuantityClick() {
		onClick();
	}
	return (
		<QuantityContainer onClick={handleQuantityClick}>
			<span>{quantity} pcs</span>
		</QuantityContainer>
	)
}