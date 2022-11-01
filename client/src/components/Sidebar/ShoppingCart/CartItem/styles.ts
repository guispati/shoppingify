import styled from 'styled-components';

export const CartItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.black};
	font-size: 1.125rem;
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