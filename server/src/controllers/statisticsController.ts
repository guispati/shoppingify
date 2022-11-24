import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import ShoppingList from "../models/shoppingListModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export const topSellingByField = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const field = req.query.field;
	const user = new mongoose.Types.ObjectId(req.body.user);

	if (!field) return next(new AppError('Please provide a field!', 400));

    const items = await ShoppingList.aggregate([
        {
            $match: {
                user,
            },
        },

        { $unwind: "$items" },

        {
            $group: {
                _id: "$items.item",
                total: {
                    $sum: "$items.amount",
                },
            },
        },

        {
            $lookup: {from: 'items', localField: '_id', foreignField: '_id', as: 'item'},
        },

        { $unwind: "$item" },

        {
            $group: {
                _id: 1,
                item: {
                    $push: {
                        amount: "$total",
                        name: `$item.${field}`,
                    },
                },
                all: {
                    $sum: "$total",
                },
            },
        },

        { $unwind: "$item" },

        {
            $project: {
                _id: 1,
                item: 1,
                percentage: {
                    $round: [{ $multiply: [{ $divide: ["$item.amount", "$all"] }, 100] }, 1],
                },
            },
        },

        {
            $sort: {
                percentage: -1,
            },
        },

        { $limit: 3 },
    ]);

    if (items != null) {
        res.status(200).json({
            status: 'success',
            data: {
                data: items,
            },
        });
    } else {
        return next(new AppError('Not Found', 404));
    }
});

export const salesPerYear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const year = Number(req.query.year);
    const user = new mongoose.Types.ObjectId(req.body.user);

	if (!year) return next(new AppError('Please provide a year!', 400));

    const items = await ShoppingList.aggregate([
        {
            $project: {
                createdAt: 1,
                items: 1,
                user: 1,
                month: { $month: "$createdAt" },
                year: { $year: "$createdAt" },
            },
        },
        {
            $match: {
                year: { $gte: year },
                user,
            },
        },
        { $unwind: "$items" },
        {
            $group: {
                _id: {
                    month: "$month",
                    year: "$year",
                },
    
                total: { $sum: "$items.amount" },
            },
        },
        {
            $project: {
                month: "$_id.month",
                total: 1,
                _id: 0,
            },
        },
        {
            $sort: {
                month: 1,
            },
        },
    ]);

    if (items != null) {
        res.status(200).json({
            status: 'success',
            data: {
                data: items,
            },
        });
    } else {
        return next(new AppError('Not Found', 404));
    }
});