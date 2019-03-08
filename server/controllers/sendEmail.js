import messages from '../models/messages';
import moment from 'moment';
//const uuid = require('uuid');

exports.createEmail = (req, res) =>{
    //res.send('Send email');

const message= {
    id: messages.length + 1,
    subject: req.body.subject,
    message: req.body.message,
    parentId: req.body.parentId,
    status: "sent",
    createdOn: moment().format('LL')
};
//console.log(message.createdOn);
messages.push(message);
res.send( {status: 200, data: message});
}