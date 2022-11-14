import { Link } from "react-router-dom";
import styled from "styled-components";

export const HistoryDetailContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: ${props => props.theme.yellow};
    margin-bottom: 2.25rem;

    span {
        font-size: 0.875rem;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
        font-weight: 700;
        font-size: 1.625rem;
        color: ${props => props.theme["base-title"]};
    }
`;