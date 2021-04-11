const jwt = require('jsonwebtoken')
const User = require('../models/User')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(401).send({ errors: [{ msg: 'no token' }] })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const foundUser = await User.findOne({ _id: decoded.id })
    if (!foundUser) {
      return res.status(401).send({ errors: [{ msg: 'not found user' }] })
    }
    req.user = foundUser
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: 'not next' }] })
  }
  next()
}

module.exports = isAuth
