import express from 'express';
import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.get('/profile', getUserProfile);

export default router;
