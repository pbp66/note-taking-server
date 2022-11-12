import { Router as router} from "express"
import api from "./api.js";
import logger from '../middleware/logger.js'

router.use('/api', logger, api);

export default router;