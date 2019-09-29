const { Router } = require('express')

const UsersMiddleware = require('../middlewares/users.middleware')

const router = new Router()

router.post('/login', UsersMiddleware.checkLogin(), (req, res) => {
  res.json({
    status: 200,
    message: 'login success.',
    token: req.token
  })
})

module.exports = router