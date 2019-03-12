import express from 'express'
import draftCtrl from '../controllers/draft'

const router = express.Router()

router.get('/', draftCtrl)

export default router
