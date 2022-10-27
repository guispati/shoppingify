import express from "express";
import authController from "../controllers/authController";
import itemController from "../controllers/itemController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/categories', itemController.getAllCategoriesFromItems);

router.route('/')
    .get(itemController.getAllItems)
    .post(itemController.uploadItemImage, itemController.resizeItemPhoto, itemController.createItem);

router.route('/:id')
    .get(itemController.getItemById)
    .delete(itemController.deleteItem);

export default router;