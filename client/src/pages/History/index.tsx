import { HistoryContextProvider } from "../../contexts/HistoryContext";
import { HistoryList } from "./HistoryList";
import { HistoryContainer } from "./styles";

export function History() {
	return (
		<HistoryContainer>
			<HistoryContextProvider>
				<h1>Shopping History</h1>

				<HistoryList />
			</HistoryContextProvider>
		</HistoryContainer>
	);
}