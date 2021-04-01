// require model User
const User = require('../models/User')
// add user
const adduser = async (req, res) => {
  try {
    const newUser = new User({ ...req.body })
    // handling error for name & email
    if (!newUser.name || !newUser.email) {
      res.status(400).send({ message: 'name and email are required' })
      return
    }
    const field = await User.findOne({ name: req.body.name })
    if (field) {
      res.status(400).send({ message: 'user already exist' })
      return
    }
    const result = await newUser.save()
    res.status(200).send({ message: 'user added successfully', result })
  } catch (error) {
    res.status(500).send({ message: `${error}` })
  }
}
// get all users
const getusers = async (req, res) => {
  try {
    const result = await User.find()
    res.status(200).send({ response: result, message: 'get all users' })
  } catch (error) {
    res.status(404).send({ message: 'can not get users' })
  }
}

// get one user
const getuser = async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id })
    res.status(200).send({ response: result, message: 'get one user' })
  } catch (error) {
    res.status(404).send({ message: 'can not get user with this id' })
  }
}

// delete user
const deleteuser = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await User.findOneAndDelete({ _id })
    // console.log(result)
    result
      ? res
          .status(200)
          .send({ response: result, message: 'this user is deleted' })
      : res.send({ message: 'already deleted' })
  } catch (error) {
    res.status(404).send({ message: 'can not delete this user' })
  }
}

//  update one user
const updateuser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    )
    console.log(result)
    result.nModified
      ? res
          .status(200)
          .send({ response: result, message: 'this user is updated' })
      : res.send({ response: result, message: 'user already updated' })
  } catch (error) {
    res.status(404).send({ message: `can not update this user /${error}` })
  }
}

module.exports = controllers = {
  adduser,
  getusers,
  getuser,
  deleteuser,
  updateuser,
}
