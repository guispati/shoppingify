import styled from "styled-components";

export const HistoryItemContainer = styled.li`
    background: ${props => props.theme.white};
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
	border-radius: 12px;
	width: 11.25rem;
	height: min-content;
	padding: 1rem;

	display: flex;
	justify-content: space-between;
	gap: 1.75rem;

    span {
        color: ${props => props.theme.yellow};
        font-size: 0.75rem;
        font-weight: 700;
    }
`;