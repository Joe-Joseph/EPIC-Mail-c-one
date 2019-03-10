import express from 'express'
import signupCtrl from '../controllers/signup'

const router = express.Router()

router.post('/', signupCtrl.createAccount)

export default router
