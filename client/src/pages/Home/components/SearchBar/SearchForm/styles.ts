import styled from "styled-components";

export const SearchFormContainer = styled.div`
	padding: 1rem;
	border-radius: 12px;
	box-sizing: border-box;
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
	display: flex;
	align-items: center;
	gap: 1.5rem;

	&:has(input:focus) {
		border-color: ${props => props.theme.yellow};
	}

	&:has(input:disabled) {
		opacity: 0.5;
		cursor: not-allowed;
	}

	> svg {
		color: ${props => props.theme["base-icons"]};
	}
`;

export const Input = styled.input`
	border: 0;
	background: transparent;
	width: 100%;
	color: ${props => props.theme['base-text']};
	font-size: 0.875rem;

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