import styled from "styled-components";
import { FooterButtons } from "../FooterButtons/styles";

export const FormButtons = styled(FooterButtons)`
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