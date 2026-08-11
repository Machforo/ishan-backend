require('dotenv').config();
const mongoose = require('mongoose');
const models = require('./models/iimtModels');

const newDesc = `<p>Choosing IIMT is choosing a future-ready education. Here is why thousands of students and parents trust us:</p>
<ol>
  <li><strong>NAAC Accredited</strong> quality assurance with a proven 30-year track record</li>
  <li><strong>Affiliated to CCS University</strong> &mdash; a UGC-recognised state university</li>
  <li><strong>90%+ consistent placement rate</strong> with 150+ active recruiting partners</li>
  <li><strong>Industry-integrated curriculum</strong> with live projects and internship support</li>
  <li><strong>Expert faculty</strong> including PhD holders, IIM/IIT alumni, and industry practitioners</li>
  <li><strong>Certificate programmes</strong> in Tally, GST, Digital Marketing, and Python</li>
  <li><strong>INFLIBNET N-LIST digital library</strong> with 6,000+ e-journals</li>
  <li><strong>Safe, green campus</strong> with modern infrastructure and hostel facilities</li>
  <li><strong>Strong alumni network</strong> of 10,000+ professionals for mentorship and referrals</li>
  <li><strong>Transparent fee structure</strong> with scholarship options for deserving students</li>
</ol>`;

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const homepage = await models.IimtHomePage.findOne();
  if (homepage) {
    if (!homepage.standApart) homepage.standApart = {};
    homepage.standApart.description = newDesc;
    await homepage.save();
    console.log('Updated standApart.description perfectly!');
  } else {
    console.log('No homepage found');
  }
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
