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
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.75rem;
    border-radius: 9999px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
    }
`;

interface CartProps {
    quantity?: number;
}

export const CartContainer = styled(ButtonsContainer)<CartProps>`
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
    position: relative;
    svg {
        fill: ${props => props.theme.white};
    }
    &::after {
        ${props => props.quantity &&
            `content: '${props.quantity}';`
        };
        background: ${props => props.theme.red};
        border-radius: 4px;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -4px;
        right: -4px;
        font-weight: 500;
        text-align: center;
        font-size: 0.75rem;
        letter-spacing: -0.06em;
        color: ${props => props.theme.white};
    }
`;