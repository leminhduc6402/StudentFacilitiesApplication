import { Router } from 'express';
import SubjectSchoolYearController from '../controllers/subjectSchoolYear.js';

const router = Router();

router.post('/create', SubjectSchoolYearController.create);
router.get('/', SubjectSchoolYearController.getAll);
router.post('/usercourse', SubjectSchoolYearController.getAllByUserCourse);

export default router;
