import styled from "styled-components";


export const ItemContainer = styled.li`
    a {
        background: ${props => props.theme.white};
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        width: 100%;
        padding: 1.25rem;
        color: ${props => props.theme.black};
    
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            font-size: 1rem;
        }
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.75rem;

    > svg {
        color: ${props => props.theme.yellow};
    }
`;

interface ItemStatusProps {
    status: "completed" | "cancelled" | "active";
}

export const ItemStatus = styled.div<ItemStatusProps>`
    border: 1px solid;
    border-color: ${props => props.status === "completed" ? props.theme.blue : props.status === 'cancelled' ? props.theme.red : props.theme.yellow};
    border-radius: 8px;
    padding: 0.25rem;

    color: ${props => props.status === "completed" ? props.theme.blue : props.status === 'cancelled' ? props.theme.red : props.theme.yellow};
    font-size: 0.75rem;
`;