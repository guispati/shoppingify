import styled from "styled-components";

export const ShoppingCartContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h3 {
		color: ${props => props.theme["base-title"]};
		font-weight: 700;
	}

	> img {
		height: 12.5rem;
	}
`;