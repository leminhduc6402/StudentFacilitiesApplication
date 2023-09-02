import { Router } from 'express';
import UserController from '../controllers/user.js';

const router = Router();

router.get('/', UserController.getAllUser);
router.get('/get-profile/:id', UserController.getUserProfileById);
router.get('/lecturers', UserController.getLecturerList);
router.patch('/change-password/:userId', UserController.changePassword);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
