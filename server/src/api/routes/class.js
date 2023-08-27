import { Router } from 'express';
import ClassController from '../controllers/class.js';

const router = Router();

router.post('/create', ClassController.create);
router.get('', ClassController.getAll);
router.patch('/:id', ClassController.update);
router.delete('/:id', ClassController.delete);

export default router;
