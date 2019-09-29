const { Router } = require('express')

const UsersMiddleware = require('../middlewares/users.middleware')
const UsersValidate = require('../middlewares/validator/users.validate')

const router = new Router()

router.post('/login',
  UsersValidate.ValidateLoginForm(),
  UsersMiddleware.checkLogin(),
  (req, res) => {
    res.json({
      status: 200,
      message: 'login success.',
      token: req.token
    })
  }
)

module.exports = router