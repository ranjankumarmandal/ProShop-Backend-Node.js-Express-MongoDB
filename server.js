import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.get('/', (req, res) => {
  res.send('ProShop Backend is running...');
});

app.use('/api/products', productRoutes);

app.use();

app.use();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
