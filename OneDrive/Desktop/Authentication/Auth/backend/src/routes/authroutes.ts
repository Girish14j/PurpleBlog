import express from 'express';
import { protect } from '../middleware/authMiddleware';
import { Router } from 'express';
import { signup, login, forgotPassword, getUsers } from '../controllers/authcontroller';  

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

router.get('/users', protect, getUsers); // Protected route
export default router;
