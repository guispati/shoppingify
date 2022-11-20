import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            color: ${props => props.theme.black};
            font-size: 1rem;

            &:last-child {
                font-size: 1.25rem;
            }
        }
    }
`;

interface BarProps {
    percentage: number;
    type: "item" | "category";
}

export const Bar = styled.div<BarProps>`
    height: 0.375rem;
    border-radius: 4px;
    width: 100%;
    background: ${props => props.theme["menu-separator"]};
    position: relative;

    &::after {
        content: "";
        background: ${props => props.type === 'item' ? props.theme.yellow : props.theme.blue};
        width: ${props => props.percentage}%;
        height: 100%;
        position: absolute;
    }
`;