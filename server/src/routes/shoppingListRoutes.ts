import express from "express";
import authController from "../controllers/authController";
import { createShoppingList, getShoppingList, updateShoppingListStatus } from "../controllers/shoppingListController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.route('/').post(createShoppingList);

router.route('/:userId')
    .get(getShoppingList)

router.route('/updateStatus/:userId/:shoppingListId')
	.patch(updateShoppingListStatus)

export default router;