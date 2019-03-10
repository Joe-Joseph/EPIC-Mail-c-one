import express from 'express'
import sendEmailCtrl from '../controllers/sendEmail'

const router = express.Router()

router.post('/', sendEmailCtrl)

export default router
