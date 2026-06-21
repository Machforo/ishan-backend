require('dotenv').config();
const mongoose = require('mongoose');
const { IimtCampusLife } = require('./models/iimtModels');
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  await IimtCampusLife.updateOne({}, {
    $set: {
      faculty: [
        { name: 'Dr. Suresh Kumar', designation: 'Professor & Dean', dept: 'Management', qualification: 'Ph.D, MBA', specialisation: 'Marketing', image: '' },
        { name: 'Dr. Anita Sharma', designation: 'Associate Professor', dept: 'Commerce', qualification: 'Ph.D, M.Com', specialisation: 'Finance', image: '' },
        { name: 'Mr. Rajesh Verma', designation: 'Assistant Professor', dept: 'IT', qualification: 'MCA, M.Tech', specialisation: 'Data Science', image: '' },
        { name: 'Ms. Priya Singh', designation: 'Assistant Professor', dept: 'Education', qualification: 'M.Ed, NET', specialisation: 'Pedagogy', image: '' }
      ]
    }
  });
  console.log('Successfully added Faculty to database!');
  mongoose.disconnect();
}).catch(console.error);
