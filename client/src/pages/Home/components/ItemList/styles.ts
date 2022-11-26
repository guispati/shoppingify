import styled from "styled-components";

import { devices } from "../../../../styles/themes/default";

export const ItemListContainer = styled.section`
	color: ${props => props.theme.black};
	display: flex;
	flex-direction: column;
	gap: 1.125rem;

	h2 {
		font-size: 1.125rem;
		margin-top: 1rem;
		cursor: default;

		@media ${devices.laptop} {
			margin-top: 3.75rem;
		}
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
	}
`;