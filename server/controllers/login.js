import users from '../models/users'
import Joi from 'joi'

const login = (req, res) => {
  const { error } = validate(req.body)

  if (error) {
    res.send({ status: 400, error: error.details[0].message })
    return
  }

  let user = users.find(email => email.email === req.body.email && email.password === req.body.password)
  if (!user) return res.send({ status: 400, error: 'User not found' })

  res.send({ status: 200, message: 'Logged in successfully' })
}

const validate = (req) => {
  const userSchema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }

  return Joi.validate(req, userSchema)
}

export default login