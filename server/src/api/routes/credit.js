import { Router } from 'express';
import CreditController from '../controllers/credit.js';

const router = Router();

router.post('/create', CreditController.create);
router.get('/', CreditController.getAll);

export default router;
