import jwt from 'jsonwebtoken';
import "dotenv/config";
import User, { UserInterface } from '../models/userModel';
import { NextFunction, Request, Response } from 'express';
import { CustomUserReq } from '../@types/custom';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

const signToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

const createSendToken = (user: UserInterface, statusCode: number, res: Response) => {
    const tokenExpirationInMiliseconds = new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN as unknown as number) * 24 * 60 * 60 * 1000);
    const token = signToken(user._id);
    const cookieOptions = {
        expires: tokenExpirationInMiliseconds,
        httpOnly: true,
		secure: false,
    }
    if (process.env.NODE_ENV === 'production') {
        cookieOptions.secure = true;
    }

    res.cookie('jwt', token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        }
    });
}

const signup = catchAsync(async (req: Request, res: Response) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    createSendToken(newUser, 201, res);
});

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    
    if (!user || !(await user.correctPassword(password, user.password!))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    createSendToken(user, 200, res);
});

const logout = (req: Request, res: Response) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({ status: 'success' });
}

const protect = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if(!token) {
        return next(new AppError('You are not logged in! Please log in to get access', 401));
    }

    const decoded: any = await jwt.verify(token, process.env.JWT_SECRET!);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('The user belonging to this token does not longer exists.', 401));
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('User recently changed password! Please log in again.', 401));
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
});

const restrictTo = (...roles: string[]) => {
    return (req: CustomUserReq, res: Response, next: NextFunction) => {
        // roles is an array ['admin', 'user']
        if (!roles.includes(req.user!.role)) {
            return next(new AppError('You do not have permission to perform this action', 403));
        }

        next();
    }
}

const updatePassword = catchAsync(async (req: CustomUserReq, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.user?.email }).select('+password');
    const oldPassword: string = req.body.oldPassword;

    const checkPassword = await user?.correctPassword(oldPassword, user.password!);

    if (!checkPassword) {
        return next(new AppError('Your current password is wrong.', 401));
    }

    user!.password = req.body.newPassword;
    user!.passwordConfirm = req.body.newPasswordConfirm;
    await user!.save();

    createSendToken(user!, 200, res);
});

export default {
	signup,
	login,
	logout,
	protect,
	restrictTo,
	updatePassword,
};