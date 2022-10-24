import express from "express";
import authController from "../controllers/authController";
import itemController from "../controllers/itemController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/getCategories', itemController.getAllCategoriesFromItems);

router.route('/')
    .get(itemController.getAllItems)
    .post(itemController.createItem);

router.route('/:id')
    .get(itemController.getItemById)
    .delete(itemController.deleteItem);

export default router;