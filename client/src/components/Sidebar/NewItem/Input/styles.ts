import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
	color: ${props => props.theme["base-title"]};
	font-weight: 500;
	font-size: 0.875rem;

	input {
		padding: 1.25rem 1rem !important;
		border: 2px solid ${props => props.theme["base-placeholder"]};
		border-radius: 12px;
		font-size: 0.875rem;
		
		&::placeholder {
			color: ${props => props.theme["base-placeholder"]};
			opacity: 1;
		}
	}
`;