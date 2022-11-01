import styled from 'styled-components';

export const QuantityContainer = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid ${props => props.theme.yellow};
	border-radius: 24px;
	color: ${props => props.theme.yellow};
	padding: 0.5rem 1.25rem;

	cursor: pointer;

	span {
		font-weight: 700;
		font-size: 0.75rem;
	}
`;