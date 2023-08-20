import { Router } from 'express';
import CreditController from '../controllers/credit.js';

const router = Router();

router.post('/create', CreditController.create);

export default router;
