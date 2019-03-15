import Joi from 'joi'

function validateMessage (message) {
  const messageSchema = {
    subject: Joi.string().min(3).required(),
    message: Joi.string().min(3).required(),
    //parentId: Joi.number().integer().required(),
  }
  return Joi.validate(message, messageSchema)
}

export default validateMessage