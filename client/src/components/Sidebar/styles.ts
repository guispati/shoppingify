import styled from "styled-components";

import { pageOptions } from "../../contexts/SidebarContext";
import { devices } from "../../styles/themes/default";

interface SidebarContainerProps {
	page: pageOptions;
}

export const SidebarContainer = styled.section<SidebarContainerProps>`
	position: fixed;
	right: 0;
	top: 0;
	width: calc(100% - 6rem);
	height: 100vh;
	padding: 2.75rem 2rem;
	padding-bottom: 6.75rem;
	background: ${props => props.page === 'shopping-cart' ? props.theme["list-background"] : props.theme.white};
	
	@media ${devices.laptop} {
		width: 25rem;
	}
`;