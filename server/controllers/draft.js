import messages from '../models/messages'

const getDraft = (req, res) => {
   //  Look for email with draft status
  //   Find it and store it in variable called draft
  const draft = messages.filter(msg => msg.status === 'draft')
  //    When you there is not messages with draft status let the client know by sending a message
  if (!draft.length) return res.send({ status: 400, message: 'Your draft is empty!' })
  // If message found display it to the user
  res.send({ status: 200, data: draft })
}

export default getDraft