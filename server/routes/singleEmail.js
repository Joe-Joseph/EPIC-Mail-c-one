import express from 'express'
import singleEmailCtrl from '../controllers/singleEmail'
const commands = express.Router({ mergeParams: true })

commands.get('/', singleEmailCtrl.readEmail)

export default commands
