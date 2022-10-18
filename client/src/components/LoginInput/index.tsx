import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input, LoginInputContainer, Prefix } from "./styles";

interface LoginInputProps extends ComponentProps<typeof Input> {
	prefix?: JSX.Element;
	inputName: string;
}

export function LoginInput({ prefix, inputName, ...props }: LoginInputProps) {
	const { register } = useFormContext();

	return (
		<LoginInputContainer>
			{!!prefix && <Prefix>{prefix}</Prefix>}
			<Input {...props} {...register(inputName)} />
			<img />
		</LoginInputContainer>
	);
}