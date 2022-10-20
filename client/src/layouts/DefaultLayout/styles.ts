import styled from "styled-components";

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	background: ${props => props.theme["base-background"]};
`;