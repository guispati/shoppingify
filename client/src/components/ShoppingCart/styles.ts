import styled from "styled-components";

export const ShoppingCartContainer = styled.section`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	right: 0;
	top: 0;
	width: 25rem;
	height: 100vh;
	background: ${props => props.theme["list-background"]};
	padding: 2.75rem 2rem;

	h3 {
		color: ${props => props.theme["base-title"]};
		font-weight: 700;
	}

	> img {
		height: 12.5rem;
	}
`;