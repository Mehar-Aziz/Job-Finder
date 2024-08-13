import express from 'express';
import { getTestimonials, createTestimonial, deleteTestimonial, updateTestimonial } from '../controllers/testimonalController.js';

const router = express.Router();

router.get('/testimonials', getTestimonials);
router.post('/testimonials', createTestimonial);
router.put('/testimonials/:id', updateTestimonial);
router.delete('/testimonials/:id', deleteTestimonial);

export default router;
