import styled from "styled-components";

export const LoginContainer = styled.main`
	font-family: 'Noto Sans', sans-serif;
	font-weight: 400;
	letter-spacing: -0.035em;

	width: min-content;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const LoginBox = styled.div`
	padding: 3rem 3.75rem;
	border: 1px solid ${props => props.theme["base-placeholder"]};
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	gap: 1.75rem;

	> img {
		height: 3rem;
		width: 3rem;
		letter-spacing: -0.035em;
		font-weight: 600;
	}

	> h1 {
		font-size: 1.125rem;
		color: ${props => props.theme['login-title']};
	}

	form {
		min-width: 356px;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;

		> button {
			margin-top: 0.5rem;
		}
	}

	p {
		text-align: center;
		font-size: 0.875rem;
	}
`;