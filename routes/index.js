import { Router } from 'express';
import api from './api.js';
import views from './views.js';
import logger from '../middleware/logger.js';

const router = Router();

router
    .use('/api', logger, api)
    .use(views);

export default router;