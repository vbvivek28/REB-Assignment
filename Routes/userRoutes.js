import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();
// GET all users
router.get('/users', userController.getAllUsers);

// GET user by ID
router.get('/users/:id', userController.getUserById);

// POST create new user
router.post('/users', userController.createUser);

// PUT update user by ID
router.put('/users/:id', userController.updateUserById);

// DELETE user by ID
router.delete('/users/:id', userController.deleteUserById);

export default router;
