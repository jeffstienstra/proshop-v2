import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 8001;

dotenv.config(); // load environment variables (initialize dotenv)

connectDb(); // connect to MongoDB
const app = express(); // initialize express

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`))
