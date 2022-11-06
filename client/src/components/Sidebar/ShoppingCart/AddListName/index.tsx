import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import * as z from 'zod';

import { AddListNameContainer, Input } from "./styles";
import { usePurchaseList } from "../../../../hooks/usePurchaseList";

const addListSchema = z.object({
    name: z.string(),
});

type AddListInput = z.infer<typeof addListSchema>;

interface AddListNameProps {
	disabled?: boolean;
}

export function AddListName({ disabled=false }: AddListNameProps) {
	const { register, getValues } = useForm<AddListInput>({
        resolver: zodResolver(addListSchema),
    });

	const { savePurchaseList } = usePurchaseList();

	function handleSave() {
		if (!disabled) {
			const { name } = getValues();
			savePurchaseList(name);
			/* TODO: toast after insert with a nice message */
		}
	}

	return (
		<AddListNameContainer>
			<div>
				<Input type="text" placeholder="Enter a name" disabled={disabled} {...register('name')} />
				<button disabled={disabled} onClick={handleSave}>Save</button>
			</div>
		</AddListNameContainer>
	);
}