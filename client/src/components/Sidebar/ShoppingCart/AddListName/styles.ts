import styled from "styled-components";

export const AddListNameContainer = styled.footer`
	border-radius: 12px;
	border: 2px solid ${props => props.theme.yellow};
	border-radius: 12px;
	display: flex;
	align-items: center;
	background: ${props => props.theme.white};

	button {
		background: ${props => props.theme.yellow};
		border: 0;
		color: ${props => props.theme.white};
		border-radius: 12px;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		padding: 0 1.5rem;
		height: 100%;
		font-weight: 700;
		cursor: pointer;
	}

	&:has(input:disabled) {
		border-color: ${props => props.theme["base-disabled"]};

		button {
			background: ${props => props.theme["base-disabled"]};
			cursor: not-allowed;
		}
	}
`;

export const Input = styled.input`
	border: 0;
	background: transparent;
	width: 100%;
	color: ${props => props.theme['base-text']};
	font-size: 0.875rem;
	padding: 1rem;
	background: ${props => props.theme.white};
	border-radius: 12px;

	&:focus {
		outline: 0;
		box-shadow: none;
	}

	&:disabled {
		cursor: not-allowed;
	}

	&::placeholder {
		color: ${props => props.theme["base-placeholder"]};
	}
`;