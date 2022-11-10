import * as Tooltip from '@radix-ui/react-tooltip';
import { NavItemLink, NavItemPopup, NavItemTrigger } from './styles';

interface NavItemProps {
	redirect: string;
	icon: JSX.Element;
	title: string;
}

export function NavItem({ redirect, icon, title }: NavItemProps) {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<NavItemTrigger asChild>
					<NavItemLink to={redirect} end>
						{icon}
					</NavItemLink>
				</NavItemTrigger>
				<NavItemPopup side='right' sideOffset={16}>
					<Tooltip.Arrow />
					<span>{title}</span>
				</NavItemPopup>
			</Tooltip.Root>
		</Tooltip.Provider>
		
	);
}
