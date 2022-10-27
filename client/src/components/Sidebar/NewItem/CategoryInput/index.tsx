import { InputHTMLAttributes, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { CategoryInputContainer } from "./styles";
import { useItem } from "../../../../hooks/useItem";

interface CategoryInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function CategoryInput({ label, ...props }: CategoryInputProps) {
	const { register } = useFormContext();
	const id = props.id ? props.id: '';
	const { getCategories } = useItem();
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		getCategories().then(data => {
			setCategories(data);
		})
	}, []);

	return (
		<CategoryInputContainer>
			<label htmlFor={id} >{label}</label>
			<Autocomplete
				id="category"
				freeSolo
				options={categories.map((option) => option)}
				renderInput={(params) => <TextField {...params} id={id} {...register(id)} placeholder='Enter a category' fullWidth required />}
			/>
			
		</CategoryInputContainer>
	);
}