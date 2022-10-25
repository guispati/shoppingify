import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar";
import { useSidebar } from "../../../hooks/useSidebar";
import { MainContainer } from "./styles";

export function Main() {
	const { isNavbarOpen } = useSidebar();

	return (
		<MainContainer isNavbarOpen={isNavbarOpen}>
			<Outlet />
			{isNavbarOpen && <Sidebar />}
		</MainContainer>
	);
}