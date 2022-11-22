import { NextFunction, Response } from 'express';

import { CustomUserReq } from '../@types/custom';
import factory from './handlerFactory';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import ShoppingList from '../models/shoppingListModel';

export const setShoppingListUserIds = (req: CustomUserReq, res: Response, next: NextFunction) => {
	// Allow nested routes
    req.body.user = !req.body.user ? req.user!.id : req.body.user;
    next();
}

export const getShoppingList = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
	const user = req.body.user;
    const doc = await ShoppingList.find({
		user,
	}).select('-items');
    
    // Send response
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });

    next();
});

export const getShoppingListById = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    const user = req.body.user;
    const doc = await ShoppingList.findOne({
        _id: req.params.id,
        user,
    }).populate({
        path: 'items.item',
        select: '_id name category',
    });

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });

    next();
});

export const createShoppingList = factory.createOne(ShoppingList);
export const updateShoppingListStatus = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    const user = req.body.user;
    const doc = await ShoppingList.findOneAndUpdate({
        _id: req.params.id,
        user,
    }, {
        $set: {
            status: req.body.status,
        }
    }, {
        new: true,
        runValidators: true,
    });

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });

    next();
});