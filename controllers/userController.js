import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  const id = user._id; // user id from mongoDB for jwt.sign()

  if (user && bcrypt.compare(user.password, password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
    });
  } else res.status(401).json({ message: 'Invalid email or password' });
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const id = user._id; // user id from mongoDB for jwt.sign()

  if (user && bcrypt.compare(user.password, password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
    });
  } else res.status(401).json({ message: 'Invalid email or password' });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export { authUser, getUserProfile };
