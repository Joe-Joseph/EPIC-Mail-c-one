import express from 'express';
const router = express.Router();
import sendEmailCtrl from '../controllers/sendEmail';

router.post('/', sendEmailCtrl.createEmail );

export default router;