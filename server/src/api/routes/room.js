import { Router } from 'express';
import RoomController from '../controllers/room.js';

const router = Router();

router.post('/create', RoomController.create);

export default router;
