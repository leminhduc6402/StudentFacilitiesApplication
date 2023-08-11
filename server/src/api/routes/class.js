import { Router } from 'express';
import ClassController from '../controllers/class.js';

const router = Router();

router.post('/create', ClassController.create);
router.get('/:id', ClassController.getById);
router.post('/get-by-name', ClassController.getByName);

export default router;
