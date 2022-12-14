import styled from "styled-components";

import { devices } from "../../../../styles/themes/default";

export const SearchBarContainer = styled.header`
	display: none;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
	line-height: 1.3;

	h1 {
		font-weight: 500;
		font-size: 1.625rem;
		color: ${props => props.theme["base-title"]};
		padding-top: 0.5rem;

		strong {
			font-weight: 700;
			color: ${props => props.theme.yellow};
		}
	}

	@media ${devices.laptop} {
		display: flex;
	}
`;