import { Router } from 'express';
import MajorController from '../controllers/major.js';

const router = Router();

router.post('/create', MajorController.create);
router.get('/', MajorController.getAll);
router.patch('/:id', MajorController.update);
router.delete('/:id', MajorController.delete);

export default router;
