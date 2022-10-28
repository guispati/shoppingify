import styled from "styled-components";

export const ItemGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	span {
		font-size: 0.75rem;
		color: ${props => props.theme["base-date"]};
	}

	p {
		color: ${props => props.theme.black};
		font-size: 1.125rem;

		strong {
			font-weight: inherit;
			font-size: 1.5rem;
		}
	}
`;