import messages from '../models/messages';

exports.getDraft = (req, res) =>{

    const sent = messages.filter(msg => msg.status === 'draft');
    //console.log(sent)
    if(!sent) res.send({status: 400, message: 'Your draft is empty!'}); 
    res.send({status: 200, data: sent});

}