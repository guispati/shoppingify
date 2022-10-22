import styled from "styled-components";

const ButtonsContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.75rem;
    border-radius: 9999px;
    font-weight: 400;
	border: 0;
	
    &:hover {
        cursor: pointer;
    }
`;

interface CartProps {
    quantity?: number;
}

export const CartButtonContainer = styled(ButtonsContainer)<CartProps>`
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