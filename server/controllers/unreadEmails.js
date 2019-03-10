import messages from '../models/messages'

const getUnread = (req, res) => {
  const unread = messages.filter(msg => msg.status === 'unread')
  if (unread) return res.send({ status: 200, data: unread })
  res.send({ status: 404, message: 'There is no unread emails' })
}

export default getUnread