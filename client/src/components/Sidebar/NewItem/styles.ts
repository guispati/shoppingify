import styled from "styled-components";

export const NewItemContainer = styled.div`
	height: 100%;
	overflow-y: auto;

	h2 {
		color: ${props => props.theme.black};
		margin-bottom: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
	}
`;