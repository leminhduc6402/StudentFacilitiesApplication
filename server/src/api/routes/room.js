import { Router } from 'express';
import RoomController from '../controllers/room.js';

const router = Router();

router.post('/create', RoomController.create);
router.get('/', RoomController.getAll);
router.patch('/:id', RoomController.update);
router.delete('/:id', RoomController.delete);

export default router;
