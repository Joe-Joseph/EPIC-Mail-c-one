import express from 'express'
import singleEmailCtrl from '../controllers/singleEmail'
import deleteOne from '../controllers/deleteEmail'
const commands = express.Router({ mergeParams: true })

commands.get('/messages/:id', singleEmailCtrl)
commands.delete('/messages/:id', deleteOne)

export default commands
