import messages from '../models/messages'
import moment from 'moment'
import validateMessage from '../helpers/message-validation'

const createEmail = (req, res) => {

  //  Error handling
const { error } = validateMessage(req.body)
  if (error) {
    res.send({ status: 400, error: error.details[0].message })
    return
  }
  // Create a new message
  const message = {
    id: messages.length + 1,
    subject: req.body.subject,
    message: req.body.message,
    parentMessageId: req.body.parentMessageId,
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    status: req.body.status,
    createdOn: moment().format('LL')
  }

  // Add new message into the array
  messages.push(message)
  //  Display created message to the user
  res.send({ status: 200, data: message })
}

export default createEmail
