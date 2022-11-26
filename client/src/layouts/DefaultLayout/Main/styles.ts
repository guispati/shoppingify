import styled from "styled-components";

import { devices } from "../../../styles/themes/default";

interface MainProps {
	isNavbarOpen: boolean;
}

export const MainContainer = styled.main<MainProps>`
	margin-left: 6rem;
	padding: 1rem 1.5rem;
	width: ${props => props.isNavbarOpen ? 'calc(100% - 31rem)' : '100%'};
	
	@media ${devices.laptop} {
		padding: 2.5rem 4rem;
	}
`;