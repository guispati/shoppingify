import express from "express";
import authController from "../controllers/authController";
import { createShoppingList, getShoppingList, getShoppingListById, setShoppingListUserIds, updateShoppingListStatus } from "../controllers/shoppingListController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.route('/').post(setShoppingListUserIds, createShoppingList);
router.route('/').get(setShoppingListUserIds, getShoppingList);
router.route('/:id')
    .get(setShoppingListUserIds, getShoppingListById)
    .patch(setShoppingListUserIds, updateShoppingListStatus);

export default router;