const JobApp = require('../models/JobApplication');

exports.createApplication = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, department, resumeLink, coverLetter } = req.body;
    const application = new JobApp({
      name, email, phone, jobTitle, department, resumeLink, coverLetter
    });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await JobApp.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JobApp.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
