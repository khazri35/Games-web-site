// require express
const express = require('express')
// express router
const router = express.Router()
// require controllers
const controller = require('../controllers/panel.controllers')
//post game to panel

// @POST method
// @description post a game to panel
// @path http://localhost:5000/api/panel
// @data params body

router.post('/', controller.addpanel)

//delete game from panel
// @DELETE method
// @description delete a game from panel
// @path http://localhost:5000/api/panel/:id
// @data params _id
router.delete('/:id', controller.deletepanel)

module.exports = router
