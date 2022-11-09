import { HistoryList } from "../HistoryList";
import { HistoryHomeContainer } from "./styles";

export function HistoryHome() {
	return (
		<HistoryHomeContainer>
            <h1>Shopping History</h1>

            <HistoryList />
		</HistoryHomeContainer>
	);
}