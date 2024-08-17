import express from 'express';

import { getProfile, updateProfile } from '../controllers/profileController';
const router = express.Router();


router.get('/:userId', getProfile);


router.put('/:userId', updateProfile);

module.exports = router;
