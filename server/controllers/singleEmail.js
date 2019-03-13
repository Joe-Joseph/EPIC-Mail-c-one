import messages from '../models/messages'

const readEmail = (req, res) => {
  const email = messages.find(msg => msg.id === parseInt(req.params.id))
  if (!email) return res.send({ status: 404, error: 'The Email was not found' })
  return res.send({ status: 200, data: email })
}


export default readEmail