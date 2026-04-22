const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const forceSeed = async () => {
    try {
        console.log('Using URI:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const superAdminEmail = 'super-admin@gmail.com';
        const existingSuper = await User.findOne({ email: superAdminEmail });
        
        if (existingSuper) {
            console.log('Super Admin already exists. Re-hashing password...');
            const salt = await bcrypt.genSalt(10);
            existingSuper.password = await bcrypt.hash('admin@123', salt);
            existingSuper.role = 'super_admin';
            existingSuper.permissions = {
                sites: ['iimt', 'ayurveda', 'hospital', 'legal', 'pharmacy'],
                sections: [],
                canCreate: true,
                canUpdate: true,
                canDelete: true
            };
            await existingSuper.save();
            console.log('Super Admin updated.');
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin@123', salt);
            await User.create({ 
                email: superAdminEmail, 
                password: hashedPassword, 
                role: 'super_admin',
                permissions: {
                    sites: ['iimt', 'ayurveda', 'hospital', 'legal', 'pharmacy'],
                    sections: [],
                    canCreate: true,
                    canUpdate: true,
                    canDelete: true
                }
            });
            console.log('Super Admin created.');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error in forceSeed:', err);
        process.exit(1);
    }
};

forceSeed();
