import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';

import { useItem } from '../../../hooks/useItem';
import { useSidebar } from '../../../hooks/useSidebar';
import { Input } from './Input';
import { NewItemContainer } from "./styles";
import { TextArea } from './TextArea';
import { CategoryInput } from './CategoryInput';
import { FormButtons } from '../components/FormButtons/styles';

const newItemFormValidationSchema = zod.object({
	name: zod.string(),
	note: zod.string().trim().optional(),
	image: zod.any(),
	category: zod.string(),
});

export type NewItemFormData = zod.infer<typeof newItemFormValidationSchema>;

export function NewItem() {
	const { createItem } = useItem();
	const { openDifferentPage } = useSidebar();

	const newItemForm = useForm<NewItemFormData>({
        resolver: zodResolver(newItemFormValidationSchema),
        defaultValues: {
			name: '',
			note: '',
			image: '',
            category: '',
        }
    });

	const { handleSubmit, reset } = newItemForm;

	async function handleNewItem(data: NewItemFormData) {
		const formData = new FormData();
		formData.append('name', data.name);
		if (data.note) {
			formData.append('note', data.note);
		}
		if (data.image[0]) {
			formData.append('file', data.image[0]);
		}
		formData.append('category', data.category);

		await createItem(formData).then(() => {
			reset();
			openDifferentPage('shopping-cart');
		});
	}

	async function handleCancelForm() {
		reset();
		openDifferentPage('shopping-cart');
	}

	return (
		<NewItemContainer>
			<h2>Add a new item</h2>

			<FormProvider {...newItemForm}>
				<form onSubmit={handleSubmit(handleNewItem)}>
					<Input type="text" label="Name" placeholder='Enter a name' id="name" required />
					<TextArea label="Note (optional)" placeholder='Enter a note' id="note" rows={4} />
					<Input type="file" accept="image/png, image/jpeg" label="Image (optional)" placeholder='Enter a url' id="image" />
					<CategoryInput label="Category" id="category" />

					<FormButtons>
						<input type='reset' value="cancel" onClick={handleCancelForm} />
						<input type='submit' value="Save" />
					</FormButtons>
				</form>
			</FormProvider>
		</NewItemContainer>
	);
}