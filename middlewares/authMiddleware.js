import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('token found');
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
  next();
};

export { protect };
