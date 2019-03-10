import express from 'express'
import unreadCtrl from '../controllers/unreadEmails'

const router = express.Router()

router.get('/', unreadCtrl.getUnread)

export default router
