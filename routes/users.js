// require express
const express = require("express");
// express router
const router = express.Router();
// require controllers
const { Signup, SignIn } = require("../controllers/user.controllers");
const isAuth = require("../middlewares/isAuth");
const {
  registerValidation,
  validations,
  signinValidation,
} = require('../middlewares/user')
const controller = require('../controllers/user.controllers')
//post user

// @POST method
// @description post a user
// @path http://localhost:5000/api/user
// @data params body

router.post('/', controller.adduser)

//get all users
// @GET method
// @description get all users
// @path http://localhost:5000/api/user
// @data no data
router.get('/', controller.getusers)

//get user by id
// @GET method
// @description get one user
// @path http://localhost:5000/api/user/:id
// @data params _id
// router.get('/:id', controller.getuser)

//delete user
// @DELETE method
// @description delete one user
// @path http://localhost:5000/api/user/:id
// @data params _id
router.delete('/:id', controller.deleteuser)

//update user
// @PUT method
// @description update one user
// @path http://localhost:5000/api/user/:id
// @data params _id req.body
router.put('/:id', controller.updateuser)

// sign up
router.post("/signup", registerValidation(), validations, Signup);
// sign in
router.post("/signin", signinValidation(), validations, SignIn);

// current user
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
