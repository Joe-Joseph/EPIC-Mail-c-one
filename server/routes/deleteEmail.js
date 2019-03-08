import express from 'express';
//const router = express.Router();
import deleteOne from '../controllers/deleteEmail';
const commands = express.Router({ mergeParams: true });

commands.delete('/', deleteOne.deleteEmail);

export default commands;