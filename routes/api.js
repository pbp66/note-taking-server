import { Router } from 'express';
import path from 'path';
import fs from 'fs/promises';

const router = Router();

const dbPath = path.resolve('../db/db.json');

export default router;