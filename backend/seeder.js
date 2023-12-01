import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDb from './config/db.js';

dotenv.config();

connectDb();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users); // insertMany() is a mongoose method that inserts an array of documents into the database

        const adminUser = createdUsers[0]._id; // get the first user in the array

        const sampleProducts = products.map((product) => {
            return {...product, user: adminUser} // add the adminUser to each product
        });

        await Product.insertMany(sampleProducts);

        console.log("Data imported!".green.inverse); // green.inverse is a colors method that colors the text green and the background inverse
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    };
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    };
};

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
};
