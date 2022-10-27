import styled from "styled-components";
import { InputContainer } from "../Input/styles";

export const TextAreaContainer = styled(InputContainer)`
	textarea {
		padding: 1.25rem 1rem;
		border: 2px solid ${props => props.theme["base-placeholder"]};
		border-radius: 12px;
		font-size: 0.875rem;
		
		&::placeholder {
			color: ${props => props.theme["base-placeholder"]};
		}
	}
`;