import messages from '../models/messages'

const deleteEmail = (req, res) => {
  const email = messages.find(msg => msg.id === parseInt(req.params.id))
  if (!email) return res.send({ status: 404, send: 'The Email message is not found' })

  const index = messages.indexOf(email)
  messages.splice(index, 1)

  res.send({status: 200, message: 'Email message deleted successfully', DeletedEmail: email})
}

export default deleteEmail;
