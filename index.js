const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://jkt-frontend-gsnw7169o-yuvraj-rathods-projects-c5e7e5d3.vercel.app'],
  credentials: true
}))

//routes
const itemRoutes = require('./src/items/item.route');
const brandRoutes = require('./src/brands/brand.route');
const categoryRoutes = require('./src/categories/category.route');
const stockRoutes = require('./src/stocks/stock.route');
const customerRoutes = require('./src/customers/customer.route');
app.use('/api/items', itemRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/customers', customerRoutes);

app.use('/', (req, res) => {
    res.send("Store Server is running!");
})



main().then(() => console.log("mongodb connected succesfully!")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})