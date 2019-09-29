const jwt = require('jsonwebtoken')

exports.verifyToken = () => async (req, res, next) => {
  const { token } = req.headers

  jwt.verify(token, '758SG3BRfZv89xTu4Xplbz9XkPMj66LE', (err, decode) => {
    if (err) {
      res.json({
        status: 401,
        message: 'token invalid or token expired.'
      })
    } else {
      req.userId = decode.userId
      next()
    }
  })
}