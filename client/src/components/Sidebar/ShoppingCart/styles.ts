import styled from "styled-components";

export const EmptyCartContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h3 {
		color: ${props => props.theme["base-title"]};
		font-weight: 700;
	}

	> img {
		height: 12.5rem;
	}
`;

export const ShoppingCartContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.75rem;
	height: 100%;
	overflow-y: auto;

	h2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: ${props => props.theme["base-title"]};
		font-size: 1.5rem;

		a {
			color: ${props => props.theme["base-title"]};
			cursor: pointer;
		}
	}
`;

export const CategorySectionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	label {
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