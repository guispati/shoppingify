import { NextFunction, Response } from 'express';

import { CustomItemReq, CustomUserReq } from '../@types/custom';
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
		user: {
			$eq: user,
		},
	});
    // const doc = await features.query.explain();
    
    // Send response
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
});

export const createShoppingList = factory.createOne(ShoppingList);
export const updateShoppingListStatus = () => {};