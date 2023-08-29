import { Router } from 'express';
import CourseRegisterController from '../controllers/courseRegister.js';

const router = Router();

router.post('/create', CourseRegisterController.create);
router.get('/', CourseRegisterController.getAll);
router.get('/:userid', CourseRegisterController.getAllByUserId);
router.delete('/:id', CourseRegisterController.delete);

export default router;