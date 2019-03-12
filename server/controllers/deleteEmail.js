import messages from '../models/messages'

const deleteEmail = (req, res) => {
  const email = messages.find(msg => msg.id === parseInt(req.params.id))
  if (!email) res.send({ status: 404, send: 'The person with the given ID is not found' })

  const index = messages.indexOf(email)
  messages.splice(index, 1)

  res.send(email)
}

export default deleteEmail;
