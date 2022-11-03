import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px ${props => props.theme['yellow']}; */
    }
    body {
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }
	a {
		text-decoration: none;
		color: ${props => props.theme['login-blue-text']};
	}
`;