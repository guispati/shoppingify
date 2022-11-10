import styled from "styled-components";

export const FullDateWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${props => props.theme["base-date"]};
    font-size: 0.75rem;
`;