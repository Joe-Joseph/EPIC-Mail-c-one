import messages from '../models/messages';

exports.getUnread = (req, res) =>{
    const unread = messages.filter(msg => msg.status === 'unread');
    if(unread) return res.send({status: 200, data: unread});
    res.send({status: 404, message: 'There is no unread emails'})
}