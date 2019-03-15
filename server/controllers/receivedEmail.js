import messages from '../models/messages'

const viewEmails = (req, res) => {
if(!messages.length) return res.send({ status: 400, message: "There is no message" })
  res.send({ status: 200, data: messages })
}

export default viewEmails