const {
  IimtAboutUs, IimtAdmissionsPage, IimtCampusLifePage, IimtCareersPage,
  IimtCollegesPage, IimtContact, IimtContactPage, IimtDownloadsPage,
  IimtEnquirePage, IimtHomePage, IimtJobApplication, IimtLead,
  IimtNewsEventPage, IimtPlacementsPage, IimtResearchPage
} = require('../models/iimtModels');

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

// --- Generic CRUD for Collections ---
exports.getCollection = (Model) => async (req, res) => {
  try {
    const items = await Model.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createItem = (Model) => async (req, res) => {
  try {
    const item = new Model(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// --- Leads ---
exports.createLead = async (req, res) => {
  try {
    const lead = new IimtLead(req.body);
    await lead.save();
    res.status(201).json({ message: 'IIMT Enquiry submitted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await IimtLead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await IimtLead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// --- Job Applications ---
exports.createApplication = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, department, resumeLink, coverLetter } = req.body;
    const application = new IimtJobApplication({ name, email, phone, jobTitle, department, resumeLink, coverLetter });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await IimtJobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await IimtJobApplication.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// --- Site Contacts (College Supports) ---
exports.getContacts = async (req, res) => {
    try {
      const contacts = await IimtContact.find().sort({ orderIndex: 1 });
      res.json(contacts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
exports.createContact = async (req, res) => {
  try {
    const contact = new IimtContact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await IimtContact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
