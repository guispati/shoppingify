import styled from "styled-components";

export const SidebarContainer = styled.section`
	position: fixed;
	right: 0;
	top: 0;
	width: 25rem;
	height: 100vh;
	padding: 2.75rem 2rem;
	background: ${props => props.theme["list-background"]};
`;