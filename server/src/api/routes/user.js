import { Router } from 'express';
import UserController from '../controllers/user.js';

const router = Router();

router.get('/', UserController.getAllUser);
router.get('/lecturers', UserController.getLecturerList);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
