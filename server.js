const express = require('express');
const products = require('./product');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.get('/', (req, res) => {
  res.send('ProShop Backend is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log('Server running in port 5000'));
