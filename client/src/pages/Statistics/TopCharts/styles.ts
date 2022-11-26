import styled from "styled-components";
import { devices } from "../../../styles/themes/default";

export const TopChartsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    @media ${devices.laptop} {
        flex-wrap: nowrap;
	}
`;