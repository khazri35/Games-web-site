const jwt = require('jsonwebtoken')
const User = require('../models/User')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(401).send({ error: [{ msg: 'no token' }] })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const foundUser = await User.findOne({ _id: decoded.id })
    if (!foundUser) {
      return res.status(401).send({ error: [{ msg: 'not found user' }] })
    }
    req.user = foundUser
  } catch (error) {
    return res.status(401).send({ error: [{ msg: 'not next' }] })
  }
  next()
}

// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next()
//   } else {
//     res.status(401)
//     throw new Error('Not authorized as admin')
//   }
// }
module.exports = isAuth
