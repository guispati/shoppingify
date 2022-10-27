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

const uploadItemImage = upload.single('file');

const resizeItemPhoto = catchAsync(async (req: CustomItemReq, res: Response, next: NextFunction) => {
	if (!req.file) return next();

    req.file.filename = `item-${req.body.name}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
		.resize(300, 300)
        .toFormat('jpeg')
        .jpeg({
            quality: 90
        })
        .toFile(`public/img/items/${req.file.filename}`);

    next();
});

const getAllCategoriesFromItems = catchAsync(async (req: CustomItemReq, res: Response, next: NextFunction) => {
	const categories = await Item.find().select({ category: 1 }).distinct("category");

    res.status(200).json({
        status: 'success',
        results: categories.length,
        data: {
            data: categories,
        },
    });
    next();
});

const getAllItems = factory.getAll(Item);
const getItemById = factory.getOne(Item, null);

const filterObj = (obj: any, ...allowedFields: any[]) => {
    const newObj: any = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) {
            newObj[el] = obj[el];
        }
    });
    return newObj;
}

const createItem = catchAsync(async (req: CustomItemReq, res: Response) => {
	const filteredBody = filterObj(req.body, 'name', 'note', 'category'); 
    if (req.file) {
		filteredBody.image = req.file.filename;
    }

	const doc = await Item.create(filteredBody);
    
    res.status(201).json({
        status: "success",
        data: {
            data: doc,
        },
    });
});

const deleteItem = factory.deleteOne(Item);

export default {
	getAllCategoriesFromItems,
	getAllItems,
	getItemById,
	createItem,
	deleteItem,
	resizeItemPhoto,
	uploadItemImage
}