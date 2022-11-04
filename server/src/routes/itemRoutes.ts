import express from "express";
import authController from "../controllers/authController";
import { createItem, deleteItem, getAllCategoriesFromItems, getAllItems, getItemById, resizeItemPhoto, uploadItemImage } from "../controllers/itemController";

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/categories', getAllCategoriesFromItems);

router.route('/')
    .get(getAllItems)
    .post(uploadItemImage, resizeItemPhoto, createItem);

router.route('/:id')
    .get(getItemById)
    .delete(deleteItem);

export default router;