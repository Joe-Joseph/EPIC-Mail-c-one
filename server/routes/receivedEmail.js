import express from 'express';
const router = express.Router();
import receivedEmailCtrl from '../controllers/receivedEmail';

router.get('/', receivedEmailCtrl.viewEmails );

export default router;