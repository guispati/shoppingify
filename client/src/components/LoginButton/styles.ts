import styled from "styled-components";

export const LoginButtonContainer = styled.button`
	background: ${props => props.theme.yellow};
	padding: 0.5rem 0;

	color: ${props => props.theme.white};
	font-weight: 600;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 8px;
	border: 0;

	cursor: pointer;

	transition: all 0.2s;

	&:hover {
		background: ${props => props.theme["yellow-dark"]};
	}
`;