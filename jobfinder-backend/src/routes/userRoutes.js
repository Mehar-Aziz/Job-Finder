import express from 'express';
import { getUser, createUser } from '../controllers/userController';

const router = express.Router();

router.route('/').get(getUser).post(createUser);

export default router;