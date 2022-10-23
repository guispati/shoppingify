import styled from "styled-components";

export const AddItemContainer = styled.div`
	height: 8.125rem;
	background: ${props => props.theme.purple};
	border-radius: 24px;
	padding: 1rem 1.75rem;
	display: flex;
	justify-content: space-between;
	gap: 2rem;

	color: ${props => props.theme.white};
	font-weight: 700;

	img {
		height: 8rem;
		transform: translateY(-2rem);
	}
	
	div {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

	
		button {
			background: ${props => props.theme.white};
			box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
			border: 0;
			border-radius: 12px;
			padding: 0.75rem 1.75rem;
	
			color: ${props => props.theme["base-title"]};
			font-size: 0.875rem;
			font-weight: 700;
	
			cursor: pointer;
		}
	}


`;