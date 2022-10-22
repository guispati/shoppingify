import styled from "styled-components";

export const ItemContainer = styled.li`
	background: ${props => props.theme.white};
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
	border-radius: 12px;
	width: 11.25rem;
	height: min-content;
	padding: 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	cursor: pointer;

	transition: all 0.2s;

	svg {
		color: ${props => props.theme["base-date"]};
	}

	&:hover {
		background: ${props => props.theme.yellow};
		color: ${props => props.theme.white};
		
		svg {
			color: ${props => props.theme.white};
		}
	}
`;