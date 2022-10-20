import styled from "styled-components";
import * as Tooltip from '@radix-ui/react-tooltip';
import { NavLink } from "react-router-dom";

export const NavItemTrigger = styled(Tooltip.Trigger)`
	& svg {
		color: ${props => props.theme["base-popup"]};
	}
`;

export const NavItemLink = styled(NavLink)`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 0;

	&.active::before {
		content: '';
		position: absolute;
		left: 0;
		width: 0.375rem;
		height: 100%;
		background: ${props => props.theme.yellow};
		border-radius: 0px 4px 4px 0px;
	}
`;

export const NavItemPopup = styled(Tooltip.Content)`
	background: ${props => props.theme["base-popup"]};
	border-radius: 4px;
	color: ${props => props.theme.white};
	padding: 0.25rem 0.5rem;
	cursor: default;
	display: flex;
	align-items: center;
	text-align: center;

	& svg {
		fill: ${props => props.theme["base-popup"]};
	}

	& span {
		font-size: 0.75rem;
	}
`;