import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET
      );

      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('not authorized');
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { protect };
