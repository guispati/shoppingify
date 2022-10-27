import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { TextAreaContainer } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

export function TextArea({ label, ...props }: TextAreaProps) {
	const { register } = useFormContext();
	const id = props.id ? props.id: '';
	
	return (
		<TextAreaContainer>
			<label htmlFor={id} >{label}</label>
			<textarea {...props} {...register(id)} />
		</TextAreaContainer>
	);
}