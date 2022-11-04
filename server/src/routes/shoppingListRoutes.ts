import express from "express";
import authController from "../controllers/authController";
import shoppingListController from "../controllers/shoppingListController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.route('/').post(shoppingListController.createShoppingList);

router.route('/:userId')
    .get(shoppingListController.getShoppingList)

router.route('/updateStatus/:userId/:shoppingListId')
	.patch(shoppingListController.updateShoppingListStatus)

export default router;