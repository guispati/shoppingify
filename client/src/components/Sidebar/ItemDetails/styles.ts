import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 100%;
	overflow-y: auto;

	a {
		display: flex;
		align-items: center;
		color: ${props => props.theme.yellow};
		cursor: pointer;
	}
`;

export const ItemDetailsInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	img {
		border-radius: 25px;
		max-width: 100%;
		height: auto;
		max-height: 200px;
		object-fit: cover;
	}
`;