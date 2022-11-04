import { NextFunction, Response } from 'express';
import multer, { memoryStorage } from 'multer';
import sharp from 'sharp';
import { CustomUserReq } from '../@types/custom';
import User from '../models/userModel';
import factory from './handlerFactory';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

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

export const uploadUserPhoto = upload.single('photo');

export const resizeUserPhoto = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    if (!req.file) return next();

    req.file.filename = `user-${req.user!.id}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({
            quality: 90
        })
        .toFile(`public/img/users/${req.file.filename}`);

    next();
});

const filterObj = (obj: any, ...allowedFields: any[]) => {
    const newObj: any = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) {
            newObj[el] = obj[el];
        }
    });
    return newObj;
}

export const getMe = (req: CustomUserReq, res: Response, next: NextFunction) => {
    req.params.id = req.user!.id;
    next();
}

export const updateMe = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('This route is not for password updates! Please use /updateMyPassword', 400));
    }

    const filteredBody = filterObj(req.body, 'name', 'email');
    if (req.file) {
        filteredBody.photo = req.file.filename;
    }
    const updatedUser = await User.findByIdAndUpdate(req.user!.id, filteredBody, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser,
        }
    });
});

export const deleteMe = catchAsync(async (req: CustomUserReq, res: Response) => {
    await User.findByIdAndUpdate(req.user!.id, {
        active: false,
    });
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

export const getAllUsers = factory.getAll(User);
export const getUserById = factory.getOne(User, null);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);