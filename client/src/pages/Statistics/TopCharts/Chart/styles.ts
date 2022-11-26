import styled from "styled-components";

import { devices } from "../../../../styles/themes/default";

export const ChartContainer = styled.div`
    flex: 0 0 100%;

    @media ${devices.laptop} {
        flex: 0 0 50%;
	}
`;

export const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`;