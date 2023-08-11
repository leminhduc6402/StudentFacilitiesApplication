import { Router } from 'express';
import ClassController from '../controllers/class.js';

const router = Router();

router.post('/create', ClassController.create);

export default router;
