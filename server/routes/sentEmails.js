import express from 'express';
const router = express.Router();
import sentEmailCtrl from '../controllers/sentEmails';
router.get('/', sentEmailCtrl.getSent );

export default router;