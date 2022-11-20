import { HeaderContainer, NavigationContainer } from "./styles";
import { ArrowCounterClockwise, ChartLine, ListBullets, SignOut } from "phosphor-react";
import { NavItem } from "./components/NavItem";
import logo from '../../assets/logo.svg';
import { CartButton } from "./components/CartButton";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
	const { logout } = useAuth();

	function handleLogoutClick() {
		logout();
	}

	return (
		<HeaderContainer>
			<img src={logo} alt="" />

			<NavigationContainer>
				<NavItem redirect="/" title="items" icon={<ListBullets size={26} weight="bold" />} />
				<NavItem redirect="/history" title="history" icon={<ArrowCounterClockwise size={26} weight="bold" />} />
				<NavItem redirect="/statistics" title="statistics" icon={<ChartLine size={26} weight="bold" />} />
				<span onClick={handleLogoutClick}><NavItem redirect="/login" title="logout" icon={<SignOut size={26} weight="bold" />} /></span>
			</NavigationContainer>

			<CartButton />
		</HeaderContainer>
	);
}