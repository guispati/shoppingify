import styled from "styled-components";
import { pageOptions } from "../../contexts/SidebarContext";

interface SidebarContainerProps {
	page: pageOptions;
}

export const SidebarContainer = styled.section<SidebarContainerProps>`
	position: fixed;
	right: 0;
	top: 0;
	width: 25rem;
	height: 100vh;
	padding: 2.75rem 2rem;
	padding-bottom: 6.75rem;
	background: ${props => props.page === 'shopping-cart' ? props.theme["list-background"] : props.theme.white};
`;