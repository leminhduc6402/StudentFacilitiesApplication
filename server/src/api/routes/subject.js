import { Router } from 'express';
import SubjectController from '../controllers/subject.js';

const router = Router();

router.post('/create', SubjectController.create);
router.get('/', SubjectController.getAll);

export default router;
