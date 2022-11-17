import styled from "styled-components";

export const CategorySectionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	> label {
		font-size: 0.875rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
`;