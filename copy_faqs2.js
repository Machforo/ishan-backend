const mongoose = require('mongoose');
const models = require('./models/iimtModels');
mongoose.connect('mongodb+srv://developer:developer@cluster0.db8yev6.mongodb.net/ishan?retryWrites=true&w=majority&appName=Cluster0').then(async () => {
  const admissions = await models.IimtAdmissions.findOne();
  if (admissions && admissions.faqs && admissions.faqs.length > 0) {
    await models.IimtHomePage.updateOne({}, { $set: { faqs: admissions.faqs } });
    console.log('Copied FAQs from admissions to homepage');
  } else {
    console.log('No FAQs found in admissions to copy');
  }
  process.exit(0);
});
