// --- Singleton Configuration Providers ---
exports.getSection = (Model) => async (req, res) => {
  try {
    console.log(`Fetching section for model: ${Model.modelName}`);
    let config = await Model.findOne();
    if (!config) {
      console.log(`No config found for ${Model.modelName}, creating new one...`);
      config = new Model({});
      await config.save();
    }
    res.json(config);
  } catch (err) {
    console.error(`Error in getSection for ${Model.modelName}:`, err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateSection = (Model) => async (req, res) => {
  try {
    let config = await Model.findOne();
    const updateData = { ...req.body };
    delete updateData._id;
    delete updateData.__v;
    if (config) {
      config = await Model.findByIdAndUpdate(config._id, updateData, { new: true, overwrite: true });
    } else {
      config = new Model(updateData);
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

// --- Leads (Generic) ---
exports.createLead = (Model, siteName) => async (req, res) => {
  try {
    const lead = new Model(req.body);
    await lead.save();
    res.status(201).json({ message: `${siteName} Enquiry submitted successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllLeads = (Model) => async (req, res) => {
  try {
    const leads = await Model.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateLeadStatus = (Model) => async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Model.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
