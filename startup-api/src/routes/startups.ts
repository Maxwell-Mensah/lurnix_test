import express from 'express';
import { createStartup, getStartups } from '../controllers/startupController';

const router = express.Router();

router.post('/startups', createStartup);

router.get('/startups', getStartups);

export default router;
