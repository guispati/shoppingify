import mongoose, { Document } from 'mongoose';

export interface ItemInterface extends Document {
	name: string;
	note?: string;
	image?: string;
	category: string;	
}

const itemSchema = new mongoose.Schema<ItemInterface>({
	name: {
		type: String,
		required: [true, 'Please enter the name of the item!'],
	},
	note: String,
	image: {
		type: String,
		default: 'default.jpg',
	},
	category: {
		type: String,
		required: [true, 'Please enter the category of the item!'],
	}
});

const Item = mongoose.model<ItemInterface>('Item', itemSchema);

export default Item;