const joi = require('joi')

const validate = require('./index')

exports.ValidateLoginForm = () => (req, res, next) => {
  const schema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
  })

  const { error } = joi.validate(req.body, schema)
  if (error) {
    return res.json({
      status: 200,
      message: 'validate login form.',
      errors: validate.validateError(error)
    })
  }

  next()
}

exports.ValidateUserForm = () => (req, res, next) => {
  const schema = joi.object().keys({
    username: joi.string().min(6).max(16).required(),
    password: joi.string().min(8).max(20).required(),
    age: joi.number().required(),
    email: joi.string().email().required()
  })

  const { error } = joi.validate(req.body, schema)
  if (error) {
    return res.json({
      status: 200,
      message: 'validate user form create.',
      errors: validate.validateError(error)
    })
  }

  next()
}

exports.ValidateUserFormUpdate = () => (req, res, next) => {
  const schema = joi.object().keys({
    age: joi.number().required(),
    email: joi.string().email().required()
  })

  const { error } = joi.validate(req.body, schema)
  if (error) {
    return res.json({
      status: 200,
      message: 'validate user form update.',
      errors: validate.validateError(error)
    })
  }

  next()
}