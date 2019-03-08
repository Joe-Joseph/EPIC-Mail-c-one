import express from 'express';
//const router = express.Router();
import singleEmailCtrl from '../controllers/singleEmail';
const commands = express.Router({ mergeParams: true });

commands.get('/', singleEmailCtrl.readEmail);

export default commands;