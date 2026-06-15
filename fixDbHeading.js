const mongoose = require('mongoose');
require('dotenv').config();
const { PharmacyFacility } = require('./models/pharmacyModels');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms')
  .then(async () => {
    await PharmacyFacility.updateOne(
      { slug: '/pharmaceutical-chemistry' },
      { $set: { overviewHeading: 'Where Chemistry Meets Pharmacy' } }
    );
    console.log('Fixed DB');
    process.exit(0);
  });
