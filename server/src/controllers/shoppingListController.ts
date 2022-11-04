import { NextFunction, Response } from 'express';

import { CustomItemReq } from '../@types/custom';
import factory from './handlerFactory';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import ShoppingList from '../models/ShoppingListModel';

export const getShoppingList = factory.getOne(ShoppingList, null);
export const createShoppingList = factory.createOne(ShoppingList);
export const updateShoppingListStatus = () => {};