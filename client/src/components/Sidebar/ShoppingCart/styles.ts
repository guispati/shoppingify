import styled from "styled-components";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const EmptyCartContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h3 {
		color: ${props => props.theme["base-title"]};
		font-weight: 700;
	}

	> img {
		height: 12.5rem;
	}
`;

export const ShoppingCartContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.75rem;
	height: 100%;
	overflow-y: auto;

	h2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: ${props => props.theme["base-title"]};
		font-size: 1.5rem;

		a {
			color: ${props => props.theme["base-title"]};
			cursor: pointer;
		}
	}
`;

export const CategorySectionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	> label {
		font-size: 0.875rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
`;

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
	position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
	z-index: 10;
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
	min-width: 20rem;
    border-radius: 24px;
    padding: 2rem;
    background: ${props => props.theme.white};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	z-index: 1000;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${props => props.theme["base-title"]};
`;

export const AlertDialogButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1.5rem;
`;

export const AlertDialogCancel = styled(AlertDialog.Cancel)`
	padding: 1.25rem;
	background: ${props => props.theme.white};
	border: 0;
	color: ${props => props.theme["base-title"]};
	cursor: pointer;
`;

export const AlertDialogAction = styled(AlertDialog.Action)`
	padding: 1.25rem;
	background: ${props => props.theme.red};
	border: 0;
	border-radius: 12px;
	color: ${props => props.theme.white};
	font-weight: 700;
	cursor: pointer;
`;