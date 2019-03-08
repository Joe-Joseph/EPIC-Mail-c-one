import express from 'express';
const router = express.Router();
import unreadCtrl from '../controllers/unreadEmails';

router.get('/', unreadCtrl.getUnread );

export default router;