import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  let token = 1;
  console.log(req.header.authorization);
  next();
};

export { protect };
