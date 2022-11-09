import { Outlet } from "react-router-dom";
import { HistoryContextProvider } from "../../contexts/HistoryContext";

export function History() {
	return (
		<HistoryContextProvider>
			<Outlet />
		</HistoryContextProvider>
	);
}