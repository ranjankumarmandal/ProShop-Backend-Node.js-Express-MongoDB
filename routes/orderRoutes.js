import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;
