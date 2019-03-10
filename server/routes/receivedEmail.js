import express from 'express'
import receivedEmailCtrl from '../controllers/receivedEmail'
const router = express.Router()

router.get('/', receivedEmailCtrl)

export default router
