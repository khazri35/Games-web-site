// require model game
const Game = require('../models/Game')
// add game
const addgame = async (req, res) => {
  try {
    const newGame = new Game({ ...req.body })
    // handling error for title & type
    if (!newGame.title || !newGame.type) {
      res.status(400).send({ message: 'title and type are required' })
      return
    }
    const field = await Game.findOne({ title: req.body.title })
    if (field) {
      res.status(400).send({ message: 'title already exist' })
      return
    }
    const result = await newGame.save()
    res.status(200).send({ message: 'title added successfully', result })
  } catch (error) {
    res.status(500).send({ message: `${error}` })
  }
}
// get all games
const getgames = async (req, res) => {
  try {
    const result = await Game.find()
    res.status(200).send({ message: 'get all games', games: result })
  } catch (error) {
    res.status(404).send({ message: 'can not get games' })
  }
}

// get one game
const getgame = async (req, res) => {
  try {
    const result = await Game.findOne({ _id: req.params.id })
    res.status(200).send({ message: 'get one game', game: result })
  } catch (error) {
    res.status(404).send({ message: 'can not get game with this id' })
  }
}

// delete game
const deletegame = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await Game.findOneAndDelete({ _id })
    // console.log(result)
    result
      ? res.status(200).send({ message: 'this game is deleted', game: result })
      : res.send({ message: 'already deleted' })
  } catch (error) {
    res.status(404).send({ message: 'can not delete this game' })
  }
}

//  update game
const updategame = async (req, res) => {
  try {
    const result = await Game.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    )
    result.nModified
      ? res.status(200).send({ message: 'this game is updated', game: result })
      : res.send({ message: 'game already updated', game: result })
  } catch (error) {
    res.status(404).send({ message: `can not update this game /${error}` })
  }
}

module.exports = controllers = {
  addgame,
  getgames,
  getgame,
  deletegame,
  updategame,
}
