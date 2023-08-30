import { Router } from 'express';
import SOSYController from '../controllers/subjectOfSchoolYear.js';

const router = Router();

router.post('/create', SOSYController.create);
router.get('/', SOSYController.getAll);
router.get('/usercourse/:course', SOSYController.getAllByUserCourse);
router.get(
  '/schoolyear-without-lecturer/:id',
  SOSYController.getSosyWithoutLecturerBySchoolYear
);
router.patch('/:id', SOSYController.update);
router.delete('/:id', SOSYController.delete);

export default router;
