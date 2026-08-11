require('dotenv').config();
const mongoose = require('mongoose');
const models = require('./models/iimtModels');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const result = await models.IimtHomePage.updateOne(
      {},
      { $pull: { banners: { heading: 'Nothing' } } }
    );
    console.log('Modified:', result.modifiedCount);
    process.exit(0);
  }).catch(console.error);
