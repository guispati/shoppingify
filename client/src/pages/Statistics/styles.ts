import styled from "styled-components";

export const StatisticsContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.black};
        margin-bottom: 2.5rem;
    }
`;