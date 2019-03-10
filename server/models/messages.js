import moment from 'moment'
const messages = [
  {
    id: 1,
    subject: 'Greetings',
    message: 'Hello',
    senderId: 14,
    receiverId: 12,
    parentMessageId: 1,
    status: 'unread',
    createdOn: moment().format('LL')
  },

  {
    id: 2,
    subject: 'Report',
    message: 'It was amazing',
    senderId: 10,
    receiverId: 12,
    parentMessageId: 2,
    status: 'sent',
    createdOn: moment().format('LL')
  },

  {
    id: 3,
    subject: 'News letter',
    message: 'I\'m doing great',
    senderId: 5,
    receiverId: 12,
    parentMessageId: 3,
    status: 'draft',
    createdOn: moment().format('LL')
  },

  {
    id: 4,
    subject: 'Greetings',
    message: 'How are doing?',
    senderId: 15,
    receiverId: 12,
    parentMessageId: 4,
    status: 'draft',
    createdOn: moment().format('LL')
  }
]

export default messages
