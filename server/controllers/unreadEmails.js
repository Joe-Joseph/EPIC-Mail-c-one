import messages from '../models/messages'

const getUnread = (req, res) => {
  //  Look for email with unred status
  //  Find it and store it in variable called unread
  const unread = messages.filter(msg => msg.status === 'unread')
  if (!unread.length) return res.send({ status: 404, message: 'There is no unread emails' })
  res.send({ status: 200, data: unread })
}

export default getUnread