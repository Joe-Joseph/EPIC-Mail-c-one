import express from 'express'
import singleEmailCtrl from '../controllers/singleEmail'
const commands = express.Router({ mergeParams: true })

commands.get('/', singleEmailCtrl)

export default commands
