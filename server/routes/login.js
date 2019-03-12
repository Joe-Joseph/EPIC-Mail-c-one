import express from 'express'
import loginCtrl from '../controllers/login'

const router = express.Router()

router.post('/', loginCtrl)

export default router
