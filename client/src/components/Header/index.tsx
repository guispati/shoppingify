import { HeaderContainer, NavigationContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowCounterClockwise, ChartLine, ListBullets, ShoppingCart } from "phosphor-react";
import { NavItem } from "./components/NavItem";
import logo from '../../assets/logo.svg';
import { CartButton } from "./components/CartButton";

export function Header() {
	const [isCartOpen, setIsCartOpen] = useState(false);

	function handleCloseCart() {
		setIsCartOpen(false);
	}

	function handleToggleCart() {
		setIsCartOpen((state) => {
			return !state;
		});
	}

	return (
		<HeaderContainer>
			<img src={logo} alt="" />

			<NavigationContainer>
				<NavItem redirect="/" title="items" icon={<ListBullets size={26} weight="bold" />} />
				<NavItem redirect="/history" title="history" icon={<ArrowCounterClockwise size={26} weight="bold" />} />
				<NavItem redirect="/statistics" title="statistics" icon={<ChartLine size={26} weight="bold" />} />
			</NavigationContainer>

			<CartButton handleToggleCart={handleToggleCart} />
		</HeaderContainer>
	);
}