import { Router } from 'express';
import DepartmentController from '../controllers/department.js';

const router = Router();

router.post('/create', DepartmentController.create);
router.get('/', DepartmentController.getAll);
router.patch('/:id', DepartmentController.update);
router.delete('/:id', DepartmentController.delete);

export default router;
