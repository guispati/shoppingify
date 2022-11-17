import styled from "styled-components";

export const ShoppingCartContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.75rem;
	height: 100%;
	overflow-y: auto;

	h2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: ${props => props.theme["base-title"]};
		font-size: 1.5rem;

		a {
			color: ${props => props.theme["base-title"]};
			cursor: pointer;
		}
	}
`;