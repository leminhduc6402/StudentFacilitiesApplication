import { Router } from 'express';
import SchoolYearController from '../controllers/schoolYear.js';

const router = Router();

router.post('/create', SchoolYearController.create);

export default router;
