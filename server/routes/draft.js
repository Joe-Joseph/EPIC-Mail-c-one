import express from 'express';
const router = express.Router();
import draftCtrl from '../controllers/draft';
router.get('/', draftCtrl.getDraft );

export default router;