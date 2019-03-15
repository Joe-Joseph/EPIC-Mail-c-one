import Joi from 'joi'

//  function to validate my message befare saving in the array
function validateMessage (message) {
  const messageSchema = {
    subject: Joi.string().min(3).required(),
    message: Joi.string().min(3).required(),
    parentMessageId: Joi.number(),
    senderId: Joi.number(),
    receiverId: Joi.number(),
    status: Joi.string().min(3).required()
  }
  return Joi.validate(message, messageSchema)
}

export default validateMessage