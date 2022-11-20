import styled from "styled-components";

export const HeaderContainer = styled.nav`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	z-index: 1;
	background: ${props => props.theme.white};
	padding: 3.375rem 0;
	width: 6rem;
`;

export const NavigationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 3.75rem;
	width: 100%;

	> span {
		width: 100%;
	}
`;