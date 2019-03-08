import express from 'express';
import messages from '../models/messages';

const app = express();

exports.viewEmails = (req, res) =>{
    res.send({status: 200, data: messages});
}