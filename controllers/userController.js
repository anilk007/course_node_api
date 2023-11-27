const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var util = require('util');


const register = async (req, res, next) => {
  try {

    console.log("register is called");
    console.log("register is called req.body :", req.body);

    const newUser = new userModel(req.body);

    const salt=bcrypt.genSaltSync(10)

    newUser.hashPassword = bcrypt.hashSync(req.body.hashPassword, salt);

    //newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await newUser.save();

    user.hashPassword = undefined;

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log("err :", err);
    res.status(400).json({ msg: err });
  }
};

const login = async (req, res, next) => {

  console.log("login is called");
  console.log("login is called req.body :", req.body);

  const { email, password } = req.body;

  console.log("login is email :", email);
  console.log("login is password :", password);

  try {

    const users = await userModel.find();
    console.log("users :", users);

    const user = await userModel.findOne({ email });
    console.log("user :", user);
    if (!user) {
      res.status(401).json({ message: 'Authentication failed.... No User found' });
    } else if (user) {
      if (!user.comparePassword(password, user.hashPassword)) {
        res
          .status(401)
          .json({ message: 'Authenitication failed. Wrong password' });
      } else {
        return res.json({
          token: jwt.sign(
            {
              email: user.email,
              username: user.username,
              _id: user._id,
            },
            process.env.SECRET
          ),
        });
      }
    }
  } catch (err) {
    console.log("err :", err);
    res.status(400).json({ msg: err });
  }
};

const loginRequired = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized user' });
  }
};

const auth = (req, res) => {
  res.status(200).json({ msg: 'Logged in' });
};

module.exports = {
  register,
  login,
  loginRequired,
  auth,
};
