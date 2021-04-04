// require model User
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
// add user
const adduser = async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    // handling error for name & email
    if (!newUser.name || !newUser.email) {
      res.status(400).send({ message: "name and email are required" });
      return;
    }
    const field = await User.findOne({ name: req.body.name });
    if (field) {
      res.status(400).send({ message: "user already exist" });
      return;
    }
    const result = await newUser.save();
    res.status(200).send({ message: "user added successfully", result });
  } catch (error) {
    res.status(500).send({ message: `${error}` });
  }
};
// get all users
const getusers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ response: result, message: "get all users" });
  } catch (error) {
    res.status(404).send({ message: "can not get users" });
  }
};

// get one user
const getuser = async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    res.status(200).send({ response: result, message: "get one user" });
  } catch (error) {
    res.status(404).send({ message: "can not get user with this id" });
  }
};

// delete user
const deleteuser = async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await User.findOneAndDelete({ _id });
    // console.log(result)
    result
      ? res
          .status(200)
          .send({ response: result, message: "this user is deleted" })
      : res.send({ message: "already deleted" });
  } catch (error) {
    res.status(404).send({ message: "can not delete this user" });
  }
};

//  update one user
const updateuser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res
          .status(200)
          .send({ response: result, message: "this user is updated" })
      : res.send({ response: result, message: "user already updated" });
  } catch (error) {
    res.status(404).send({ message: `can not update this user /${error}` });
  }
};

const SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};

const Signup = async (req, res) => {
  try {
    //   req.body
    const { name, email, password } = req.body;

    // check if the email is not found in the database
    const FoundUser = await User.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newUser = new User({ name, email, password });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newUser.save();
    res.status(200).send({ msg: "user saved succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};

module.exports = controllers = {
  adduser,
  getusers,
  getuser,
  deleteuser,
  updateuser,
  SignIn,
  Signup,
};
