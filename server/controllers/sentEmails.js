import messages from '../models/messages'

exports.getSent = (req, res) => {
  const sent = messages.filter(msg => msg.status === 'sent')
  //    console.log(sent)
  if (!sent) res.send({ status: 400, message: 'There is no sent emails' })
  res.send({ status: 200, data: sent })
}
