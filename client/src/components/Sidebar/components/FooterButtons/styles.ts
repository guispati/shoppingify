import styled from "styled-components";

export const FooterButtons = styled.footer`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	background: ${props => props.theme.white};
	padding: 1.5rem;
`;