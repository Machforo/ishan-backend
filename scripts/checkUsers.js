const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const User = require('../models/User');

const checkUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const users = await User.find({}, 'email role');
        console.log('Current Users in DB:', users);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkUsers();
