import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
  })
);

export default router;
