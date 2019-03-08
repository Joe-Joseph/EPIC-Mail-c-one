import express from 'express';
const router = express.Router();
import loginCtrl from '../controllers/login';

router.post('/', loginCtrl.login );

export default router;