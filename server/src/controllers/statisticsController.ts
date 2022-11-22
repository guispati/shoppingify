import { NextFunction, Response } from "express";
import mongoose from "mongoose";

import { CustomItemReq } from "../@types/custom";
import ShoppingList from "../models/shoppingListModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export const topSellingByField = catchAsync(async (req: CustomItemReq, res: Response, next: NextFunction) => {
    const field = req.body.field;
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
                all: 1,
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

export const salesPerYear = catchAsync(async (req: CustomItemReq, res: Response, next: NextFunction) => {
    const year = req.body.year;
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
                year: "$_id.year",
                month: "$_id.month",
                total: 1,
    
                key: {
                    $concat: [
                        { $toString: "$_id.month" },
                        "/",
                        { $toString: "$_id.year" },
                    ],
                },
                _id: 0,
            },
        },
        {
            $sort: {
                year: -1,
                month: -1,
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