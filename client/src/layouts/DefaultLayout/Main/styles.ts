import styled from "styled-components";

interface MainProps {
	isNavbarOpen: boolean;
}

export const MainContainer = styled.main<MainProps>`
	margin-left: 6rem;
	padding: 2.5rem 4rem;
	width: ${props => props.isNavbarOpen ? 'calc(100% - 31rem)' : '100%'};
`;