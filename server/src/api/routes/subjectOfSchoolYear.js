import { Router } from 'express';
import SOSYController from '../controllers/subjectOfSchoolYear.js';

const router = Router();

router.post('/create', SOSYController.create);
router.patch('/lecturer-get-class', SOSYController.updateLecturer);
router.get('/', SOSYController.getAll);
router.get('/usercourse/:course', SOSYController.getAllByUserCourse);
router.get('/sosy-without-lecturer', SOSYController.getSosyWithoutLecturer);
router.patch('/:id', SOSYController.update);
router.patch('/slotRemain/:sosyId', SOSYController.updateSlotRemain);
router.delete('/:id', SOSYController.delete);

export default router;
