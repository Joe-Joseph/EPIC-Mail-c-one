import express from 'express'
import signupCtrl from '../controllers/signup'
import loginCtrl from '../controllers/login'
import receivedEmailCtrl from '../controllers/receivedEmail'
import unreadCtrl from '../controllers/unreadEmails'
import sentEmailCtrl from '../controllers/sentEmails'
import draftCtrl from '../controllers/draft'
import sendEmailCtrl from '../controllers/sendEmail'

const router = express.Router()

router.post('/auth/signup', signupCtrl)
router.post('/auth/login', loginCtrl)
router.get('/messages', receivedEmailCtrl)
router.get('/messages/unread', unreadCtrl)
router.get('/messages/sent', sentEmailCtrl)
router.get('/messages/draft', draftCtrl)
router.post('/messages', sendEmailCtrl)

export default router
