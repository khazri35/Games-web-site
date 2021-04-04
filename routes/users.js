// require express
const express = require("express");
// express router
const router = express.Router();
// require model user
const Game = require("../models/User");
// require controllers
const controller = require("../controllers/user.controllers");
//post user

// @POST method
// @description post a user
// @path http://localhost:5000/api/user
// @data params body

router.post("/", controller.adduser);

//get all users
// @GET method
// @description get all users
// @path http://localhost:5000/api/user
// @data no data
router.get("/", controller.getusers);

//get user by id
// @GET method
// @description get one user
// @path http://localhost:5000/api/user/:id
// @data params _id
router.get("/:id", controller.getuser);

//delete user
// @DELETE method
// @description delete one user
// @path http://localhost:5000/api/user/:id
// @data params _id
router.delete("/:id", controller.deleteuser);

//update user
// @PUT method
// @description update one user
// @path http://localhost:5000/api/user/:id
// @data params _id req.body
router.put("/:id", controller.updateuser);

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");

const { Signup, SignIn } = require("../controllers/user.controllers");

router.post("/signin", signinValidation(), validation, SignIn);

router.post("/signup", registerValidation(), validation, Signup);

module.exports = router;
