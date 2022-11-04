import express from "express";
import authController from "../controllers/authController";
import { deleteMe, deleteUser, getAllUsers, getMe, getUserById, resizeUserPhoto, updateMe, updateUser, uploadUserPhoto } from "../controllers/userController";

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', getMe, getUserById)

router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe);
router.delete('/deleteMe', deleteMe);

router.use(authController.restrictTo('admin'));

router.route('/')
    .get(getAllUsers)

router.route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

export default router;