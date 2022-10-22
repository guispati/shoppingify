import { useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import * as z from 'zod';

import { Input, SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
    fetchItems: (query: string) => void;
}

export function SearchForm() {
	const { register, watch } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const query = watch('query');

    useEffect(() => {
		console.log(query);
        // fetchItems(watch('query'));
    }, [query]);

	return (
		<SearchFormContainer>
			<MagnifyingGlass weight="bold" size={26} />
			<Input type="text" placeholder="search item" {...register('query')} />
		</SearchFormContainer>
	);
}