import express from "express";
import authController from "../controllers/authController";
import { createShoppingList, getShoppingList, getShoppingListById, setShoppingListUserIds, updateShoppingListStatus } from "../controllers/shoppingListController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect, setShoppingListUserIds);

router.route('/').post(createShoppingList);
router.route('/').get(getShoppingList);
router.route('/:id')
    .get(getShoppingListById)
    .patch(updateShoppingListStatus);

export default router;