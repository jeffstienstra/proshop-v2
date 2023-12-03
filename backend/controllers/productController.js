import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});

    if(products) {
        console.log(`
        All products request: ${res.statusCode} ${req.method} ${req.originalUrl}
        timestamp: ${Date.now()} ${Intl.DateTimeFormat().resolvedOptions().timeZone}
        `);

        return res.json(products);
    }

    res.status(404).json({message: "No products found"})
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        console.log(`
        Single product request: ${res.statusCode} ${req.method} ${req.originalUrl}
        timestamp: ${Date.now()} ${Intl.DateTimeFormat().resolvedOptions().timeZone}
        `);

        return res.json(product);
    }

    res.status(404)
    throw new Error ('Resource not found.');
});

export {getProducts, getProductById};