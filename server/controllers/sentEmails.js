import messages from '../models/messages'

const getSent = (req, res) => {
  //  Look for email with sent status
  const sent = messages.filter(msg => msg.status === 'sent')
  // If not found send an message
  if (!sent.length) return res.send({ status: 400, message: 'There is no sent emails' })
  //  If found send it to the client
  res.send({ status: 200, data: sent })
}

export default getSent