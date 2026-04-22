const {
  HospitalHomePage, HospitalDoctors, HospitalDepartments, HospitalPanchkarma,
  HospitalPatientServices, HospitalWhyIshan, HospitalContact, HospitalLead
} = require('../models/hospitalModels');

// --- Singleton Configuration Providers ---
exports.getSection = (Model) => async (req, res) => {
  try {
    let config = await Model.findOne();
    if (!config) {
      config = new Model({});
      await config.save();
    }
    res.json(config);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSection = (Model) => async (req, res) => {
  try {
    let config = await Model.findOne();
    if (config) {
      config = await Model.findByIdAndUpdate(config._id, req.body, { new: true, overwrite: true });
    } else {
      config = new Model(req.body);
      await config.save();
    }
    res.json(config);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// --- Leads ---
exports.createLead = async (req, res) => {
  try {
    const lead = new HospitalLead(req.body);
    await lead.save();
    res.status(201).json({ message: 'Hospital Enquiry submitted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await HospitalLead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await HospitalLead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
