import { CartContainer, HeaderContainer, NavigationContainer } from "./styles";
import logo from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";
import { ArrowCounterClockwise, ChartLine, ListBullets, ShoppingCart } from "phosphor-react";
import { NavItem } from "./components/NavItem";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="" />

			<NavigationContainer>
				<NavItem redirect="/" title="items" icon={<ListBullets size={26} weight="bold" />} />
				<NavItem redirect="/history" title="history" icon={<ArrowCounterClockwise size={26} weight="bold" />} />
				<NavItem redirect="/statistics" title="statistics" icon={<ChartLine size={26} weight="bold" />} />
			</NavigationContainer>

			<CartContainer quantity={1}>
				<ShoppingCart size={20} weight="fill" />
			</CartContainer>
		</HeaderContainer>
	);
}