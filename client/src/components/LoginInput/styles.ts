import styled from "styled-components";

export const LoginInputContainer = styled.div`
	padding: 1rem;
	border-radius: 8px;
	box-sizing: border-box;
	border: 1px solid ${props => props.theme["base-placeholder"]};
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;

	&:has(input:focus) {
		border-color: ${props => props.theme.yellow};
	}

	&:has(input:disabled) {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const Prefix = styled.span`
	color: ${props => props.theme["base-text"]};
	height: 20px;
`;

export const Input = styled.input`
	border: 0;
	background: transparent;
	width: 100%;
	color: ${props => props.theme['base-text']};

	&:focus {
		outline: 0;
		box-shadow: none;
	}

	&:disabled {
		cursor: not-allowed;
	}

	&::placeholder {
		font-weight: 400;
	}
`;