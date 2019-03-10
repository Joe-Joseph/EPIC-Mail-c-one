import messages from '../models/messages'

const viewEmails = (req, res) => {
  res.send({ status: 200, data: messages })
}

export default viewEmails