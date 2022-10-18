import { ComponentProps, ReactNode } from "react";
import { LoginButtonContainer } from "./styles";

interface LoginButtonProps extends ComponentProps<typeof LoginButtonContainer> {}

export function LoginButton({ children, ...props }: LoginButtonProps) {
	return (
		<LoginButtonContainer {...props}>
			{children}
		</LoginButtonContainer>
	);
}