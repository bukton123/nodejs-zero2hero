const Express = require('express')
const body = require('body-parser')

const UsersRouter = require('./routes/users')
const AuthRouter = require('./routes/auth')

const app = new Express()

app.use(body())

app.use('/users', UsersRouter)
app.use('/auth', AuthRouter)

app.get('/test', (req, res) => {
  res.json({
    test:123
  })
})

app.listen(3000, () => {
  console.log('listen port: 3000')
})
