import styled from "styled-components";

export const NewItemContainer = styled.div`
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

export const FormButtons = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;

	input:is([type="submit"], [type="reset"]) {
		padding: 1.25rem;
		border: 0;
		border-radius: 12px;
		font-weight: 700;
		background: ${props => props.theme.white};
		cursor: pointer;
	}

	input[type="submit"] {
		background: ${props => props.theme.yellow};
		color: ${props => props.theme.white};
		transition: all 0.2s;
		
		&:hover {
			background: ${props => props.theme["yellow-dark"]};
		}
	}
`;