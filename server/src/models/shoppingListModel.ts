import mongoose, { Document, Schema } from 'mongoose';

export interface ShoppingListInterface extends Document {
	name: string;
	createdAt: Date;
	note?: string;
	status: "completed" | "cancelled" | "active";
	user: Schema.Types.ObjectId;
	items: [
		item: {
			type: Schema.Types.ObjectId;
			amount: number;
		}
	]
}

const ShoppingListSchema = new mongoose.Schema<ShoppingListInterface>({
	name: {
		type: String,
		required: [true, 'Please enter the name of the list!'],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	status: {
		type: String,
		enum: ['completed', 'cancelled', 'active'],
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Please provide the user id!'],
	},
	items: [
		{
			item: {
				type: Schema.Types.ObjectId,
				ref: 'Item',
				required: [true, 'Please provide at least one item!'],
			},
			amount: {
				type: Number,
				default: 1,
			},
		},
	],
});

const ShoppingList = mongoose.model<ShoppingListInterface>('ShoppingList', ShoppingListSchema);

export default ShoppingList;