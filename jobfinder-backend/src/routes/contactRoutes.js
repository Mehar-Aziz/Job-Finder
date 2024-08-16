import express from 'express';
const router = express.Router();
import contactController from '../controllers/contactController';

router.post('/submit', contactController.submitContactForm);

export default router
