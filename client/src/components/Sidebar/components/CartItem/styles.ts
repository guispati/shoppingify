import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export const CartItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	label {
		color: ${props => props.theme.black};
		font-size: 1.125rem;
	}
`;

export const QuantityModifierContainer = styled.div`
	background: ${props => props.theme.white};
	border-radius: 12px;
	display: flex;
	gap: 0.5rem;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.yellow};
	cursor: pointer;
	padding-right: 0.5rem;
`;

export const TrashContainer = styled.div`
	background: ${props => props.theme.yellow};
	padding: 0.75rem;
	border-radius: 12px;
	color: ${props => props.theme.white};
	cursor: pointer;
`;

export const LabelWithCheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

interface LabelCheckboxProps {
	checked?: 'indeterminate' | boolean;	
}

export const LabelCheckbox = styled.label<LabelCheckboxProps>`
	${props => props.checked === true && 'text-decoration: line-through'};
`;

export const CheckboxContainer = styled(Checkbox.Root)`
	border: 2px solid ${props => props.theme.yellow};
	border-radius: 4px;
	color: ${props => props.theme.yellow};
	cursor: pointer;
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;