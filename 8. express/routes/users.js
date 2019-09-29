const { Router } = require('express')

const UsersMiddleware = require('../middlewares/users.middleware')
const UserModel = require('../models/users.model')
const TokenMiddleware = require('../middlewares/token.middleware')

const router = new Router()

// read 
router.get('/', TokenMiddleware.verifyToken(), async (req, res) => {
  const { search } = req.query
  const results = await UserModel.Find(search)
  res.json({
    status: 200,
    message: 'find.',
    results
  })
})

// find by id
router.get('/:id',  TokenMiddleware.verifyToken(), async (req, res) => {
  const result = await UserModel.FindById(req.params.id)

  if (!result) {
    return res.json({
      status: 200,
      message: 'user not found.'
    })
  }

  res.json({
    status: 200,
    message: 'find by id.',
    result
  })
})

// create
router.post('/',  TokenMiddleware.verifyToken(), UsersMiddleware.checkUser(), async (req, res) => {
  const { username, password, email, age } = req.body
  await UserModel.CreateUser(username, password, age, email)
  res.json({
    status: 201,
    message: 'creeated.'
  }).status(201)
})

// update
router.patch('/:id',  TokenMiddleware.verifyToken(), async (req, res) => {
  const { email, age } = req.body
  await UserModel.UpdateUser(req.params.id, email, age)
  res.json({
    status: 200,
    message: 'updated.'
  })
})

// delete
router.delete('/:id',  TokenMiddleware.verifyToken(), async (req, res) => {
  await UserModel.DeleteUser(req.params.id)
  res.json({
    status: 200,
    message: 'deleted.'
  })
})

module.exports = router