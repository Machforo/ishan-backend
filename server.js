const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const aboutusRoutes = require('./routes/aboutus');
const collegesRoutes = require('./routes/colleges');
const admissionsRoutes = require('./routes/admissions');
const placementsRoutes = require('./routes/placements');
const campuslifeRoutes = require('./routes/campuslife');
const researchRoutes = require('./routes/research');
const newseventRoutes = require('./routes/newsevent');
const careersRoutes = require('./routes/careers');
const downloadsRoutes = require('./routes/downloads');
const siteContactRoutes = require('./routes/contact');
const enquireRoutes = require('./routes/enquire');
const jobAppRoutes = require('./routes/jobapps');
const ayurvedaRoutes = require('./routes/ayurveda');
const hospitalRoutes = require('./routes/hospital');
const legalRoutes = require('./routes/legal');
const pharmacyRoutes = require('./routes/pharmacy');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static admin panel
app.use('/', express.static('public'));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/leads');
const contactRoutes = require('./routes/contacts');
const homepageRoutes = require('./routes/homepage');
const userRoutes = require('./routes/users');
const leadCtrl = require('./controllers/leadController');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.get('/api/leads/all', leadCtrl.getAllLeads);
app.use('/api/leads', leadRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/homepage', homepageRoutes);

app.use('/api/aboutus', aboutusRoutes);
app.use('/api/colleges', collegesRoutes);
app.use('/api/admissions', admissionsRoutes);
app.use('/api/placements', placementsRoutes);
app.use('/api/campuslife', campuslifeRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/newsevent', newseventRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/downloads', downloadsRoutes);
app.use('/api/contact', siteContactRoutes);
app.use('/api/enquire', enquireRoutes);
app.use('/api/job-applications', jobAppRoutes);
app.use('/api/ayurveda', ayurvedaRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/legal', legalRoutes);
app.use('/api/pharmacy', pharmacyRoutes);

const marqueeRoutes = require('./routes/marquee');
app.use('/api/marquee', marqueeRoutes);

const collegeHeadRoutes = require('./routes/collegeHeadAndText');
app.use('/api/college-head', collegeHeadRoutes);

const programmeHeadRoutes = require('./routes/programmeHeadAndText');
app.use('/api/programme-head', programmeHeadRoutes);

const placementHeadRoutes = require('./routes/placementHeadAndText');
app.use('/api/placement-head', placementHeadRoutes);

const placementHeadV2Routes = require('./routes/placementHeadV2');
app.use('/api/placement-head-v2', placementHeadV2Routes);

const heroV2Routes = require('./routes/heroV2Content');
app.use('/api/hero-v2', heroV2Routes);

const statsStripRoutes = require('./routes/statsStrip');
app.use('/api/stats-strip', statsStripRoutes);

// Landing Pages
const landingPage1Routes = require('./routes/landingPage1');
const landingPage2Routes = require('./routes/landingPage2');
app.use('/api/landing1', landingPage1Routes);
app.use('/api/landing2', landingPage2Routes);


// Isolated IIMT routes
const iimtRoutes = require('./routes/iimt');
app.use('/api/iimt', iimtRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ishan CMS Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
