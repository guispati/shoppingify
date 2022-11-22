import express from "express";
import authController from "../controllers/authController";
import { setShoppingListUserIds } from "../controllers/shoppingListController";
import { topSellingByField, salesPerYear } from "../controllers/statisticsController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect, setShoppingListUserIds);

router.route('/topItems').get(topSellingByField);
router.route('/sales').get(salesPerYear);

// router.route('/:id')
//     .get(getItemById)
//     .delete(deleteItem);

export default router;