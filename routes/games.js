// require express
const express = require('express')
// express router
const router = express.Router()

// require controllers
const controller = require('../controllers/game.controllers')
//post game

// @POST method
// @description post a game
// @path http://localhost:5000/api/game
// @data params body

router.post('/', controller.addgame)

//get all game
// @GET method
// @description get all game
// @path http://localhost:5000/api/game
// @data no data
router.get('/', controller.getgames)

//get game by id
// @GET method
// @description get one game
// @path http://localhost:5000/api/game/:id
// @data params _id
router.get('/:id', controller.getgame)

//delete game
// @DELETE method
// @description delete one game
// @path http://localhost:5000/api/game/:id
// @data params _id
router.delete('/:id', controller.deletegame)

//update game
// @PUT method
// @description update one game
// @path http://localhost:5000/api/game/:id
// @data params _id req.body
router.put('/:id', controller.updategame)

module.exports = router
