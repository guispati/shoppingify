import styled from "styled-components";

import { devices } from "../../styles/themes/default";

export const HeaderContainer = styled.nav`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	z-index: 1;
	background: ${props => props.theme.white};
	padding: 1.5rem 0;
	width: 6rem;
	
	@media ${devices.laptop} {
		padding: 3.375rem 0;
	}
`;

export const NavigationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	width: 100%;

	> span {
		width: 100%;
	}

	@media ${devices.laptop} {
		gap: 3.75rem;
	}
`;