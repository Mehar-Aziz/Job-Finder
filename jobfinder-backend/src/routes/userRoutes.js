import express from 'express';
import { register, login, forgotPassword } from '../controllers/userController.js';
import { body } from 'express-validator';

const router = express.Router();

//Rigistration
router.post('/registration', [
    body('name').notEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min:6 }).withMessage('Password must be at least 6 characters')
], register);

//login
router.post('/login', login);
//forgetpasswrd
router.post('/forgot-password', forgotPassword);
//reset password
router.post('/reset-password', resetPassword);


export default router;