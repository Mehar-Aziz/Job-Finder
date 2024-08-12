import express from 'express';
import { register } from '../controllers/userController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/registration', [
    body('name').notEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min:6 }).withMessage('Password must be at least 6 characters')
], register);

export default router;