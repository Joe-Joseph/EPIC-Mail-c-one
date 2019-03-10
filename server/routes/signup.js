import express from 'express'
import signupCtrl from '../controllers/signup'

const router = express.Router()

router.post('/', signupCtrl)

export default router
