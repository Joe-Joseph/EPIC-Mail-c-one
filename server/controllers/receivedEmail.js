import messages from '../models/messages'

exports.viewEmails = (req, res) => {
  res.send({ status: 200, data: messages })
}
