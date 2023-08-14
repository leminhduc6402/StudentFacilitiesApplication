import { Router } from 'express';
import MajorController from '../controllers/major.js';

const router = Router();

router.post('/create', MajorController.create);

export default router;
