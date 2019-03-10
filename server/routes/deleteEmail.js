import express from 'express'
import deleteOne from '../controllers/deleteEmail'
const commands = express.Router({ mergeParams: true })

commands.delete('/', deleteOne)

export default commands
