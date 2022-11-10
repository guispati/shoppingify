import styled from "styled-components";

export const HistoryListContainer = styled.section`
    color: ${props => props.theme.black};
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> h2 {
		font-size: 0.75rem;
		margin-top: 3.5rem;
		cursor: default;
	}

	ul {
		list-style: none;
		display: flex;
        flex-direction: column;
		gap: 1.75rem;
	}
`;