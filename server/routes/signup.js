import  express  from 'express';
const router = express.Router();

import  signupCtrl  from '../controllers/signup';

router.post('/', signupCtrl.createAccount );

export default router;