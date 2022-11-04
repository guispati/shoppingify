import { NextFunction, Response } from 'express';

import { CustomItemReq } from '../@types/custom';
import factory from './handlerFactory';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import ShoppingList from '../models/ShoppingListModel';

const getShoppingList = factory.getOne(ShoppingList, null);
const createShoppingList = factory.createOne(ShoppingList);
const updateShoppingListStatus = () => {};

export default {
	getShoppingList,
	createShoppingList,
	updateShoppingListStatus
}