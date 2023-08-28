import { Router } from 'express';
import SchoolYearController from '../controllers/schoolYear.js';

const router = Router();

router.post('/create', SchoolYearController.create);
router.get('/', SchoolYearController.getAll);
router.patch('/:id', SchoolYearController.update);
router.delete('/:id', SchoolYearController.delete);

export default router;
