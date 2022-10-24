import { NextFunction, Response } from 'express';
import multer, { memoryStorage } from 'multer';
import sharp from 'sharp';
import { CustomItemReq } from '../@types/custom';
import factory from './handlerFactory';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import Item from '../models/itemModel';

const multerStorage = memoryStorage();

const upload = multer({
    storage: multerStorage,
    fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith('image')) {
			cb(null, true);
		} else {
			cb((new AppError('Not an image! Please upload only images.', 400) as unknown as null), false);
		}
	},
});

const uploadItemImage = upload.single('image');

const resizeItemPhoto = catchAsync(async (req: CustomItemReq, res: Response, next: NextFunction) => {
    if (!req.file) return next();

    req.file.filename = `item-${req.item!.id}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({
            quality: 90
        })
        .toFile(`public/img/items/${req.file.filename}`);

    next();
});

const getAllItems = factory.getAll(Item);
const getItemById = factory.getOne(Item, null);
const createItem = factory.createOne(Item);
const deleteItem = factory.deleteOne(Item);

export default {
	getAllItems,
	getItemById,
	createItem,
	deleteItem,
	resizeItemPhoto,
	uploadItemImage
}