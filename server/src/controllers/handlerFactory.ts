import { NextFunction, Request, Response } from "express";
import { CustomReq } from "../@types/custom";

import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import APIFeatures from "../utils/apiFeatures";

interface deleteOneType {
	findByIdAndDelete: (arg0: string) => any;
}

const deleteOne = (Model: deleteOneType) => catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});

interface updateOneType {
	findByIdAndUpdate: (
		arg0: string,
		arg1: any,
		arg2: {
			new: boolean;
			runValidators: boolean;
		}
	) => any;
}

const updateOne = (Model: updateOneType) => catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
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
        }
    });
});

interface createOneType {
	create: (arg0: any) => any;
}

const createOne = (Model: createOneType) => catchAsync(async (req: Request, res: Response) => {
    const doc = await Model.create(req.body);
    
    res.status(201).json({
        status: "success",
        data: {
            data: doc,
        },
    });
});

interface getOneType {
	findById: (arg0: string) => any;
}

const getOne = (Model: getOneType, popOptions?: any) => catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    let query = Model.findById(req.params.id);
    if (popOptions) {
        query = query.populate(popOptions);
    }
    const doc = await query;

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

interface getAllType {
	find: (arg0: {}) => any;
}

const getAll = (Model: getAllType) => catchAsync(async (req: CustomReq, res: Response) => {
    // To allow for nested GET reviews on item (hack)
    let filter = {};
    if (req.params.itemId) {
        filter = { item: req.params.itemId };
    }
    const features = new APIFeatures(Model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const doc = await features.query;
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

export default {
	deleteOne,
	updateOne,
	createOne,
	getOne,
	getAll,
};