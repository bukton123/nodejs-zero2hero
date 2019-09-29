const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserModel = require('../models/users.model')

exports.checkUser = () => async (req, res, next) => {
  const { username } = req.body
  const find = await UserModel.FindUsername(username)
  if (find) {
    return res.json({
      status: 200,
      message: 'user exists.'
    })
  }

  next()
}

// exports.checkUser  = (req, res, next) => {
//   if (false) {
//     return res.json({
//       status: 200,
//       message: 'user exists.'
//     })
//   }

//   next()
// }

exports.checkLogin = () => async (req, res, next) => {
  const { username, password } = req.body
  const find = await UserModel.FindLoginUser(username)

  if (!find) {
    return res.json({
      status: 401,
      message: 'Incorrect username or password.'
    }).status(401)
  }

  const compare = bcrypt.compareSync(password, find.password)
  if (!compare) {
    return res.json({
      status: 401,
      message: 'Incorrect username or password.'
    }).status(401)
  }

  req.token = jwt.sign({
    userId: find.id
  }, 
  '758SG3BRfZv89xTu4Xplbz9XkPMj66LE',
  {
    expiresIn: '1h'
  })

  next()
}