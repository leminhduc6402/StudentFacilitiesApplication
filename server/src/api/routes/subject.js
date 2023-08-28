import { Router } from 'express';
import SubjectController from '../controllers/subject.js';

const router = Router();

router.post('/create', SubjectController.create);
router.get('/', SubjectController.getAll);
router.patch('/:id', SubjectController.update);
router.delete('/:id', SubjectController.delete);

export default router;
