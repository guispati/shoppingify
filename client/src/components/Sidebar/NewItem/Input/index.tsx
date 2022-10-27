import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ label, ...props }: InputProps) {
	const { register } = useFormContext();
	const id = props.id ? props.id: '';

	return (
		<InputContainer>
			<label htmlFor={id} >{label}</label>
			<input {...props} {...register(id)} />
		</InputContainer>
	);
}