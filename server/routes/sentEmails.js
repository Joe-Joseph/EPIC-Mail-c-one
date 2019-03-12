import express from 'express'
import sentEmailCtrl from '../controllers/sentEmails'

const router = express.Router()

router.get('/', sentEmailCtrl)

export default router
