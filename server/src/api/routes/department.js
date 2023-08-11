import { Router } from 'express';
import DepartmentController from '../controllers/department.js';

const router = Router();

router.post('/create', DepartmentController.create);

export default router;
