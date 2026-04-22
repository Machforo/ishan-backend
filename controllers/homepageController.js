const HomePage = require('../models/HomePage');

// Get the single active Homepage configuration
exports.getHomePage = async (req, res) => {
  try {
    let config = await HomePage.findOne();
    if (!config) {
      // Create empty if it doesn't exist just to prevent errors
      config = new HomePage({});
      await config.save();
    }
    res.json(config);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update the Homepage configuration entirely
exports.updateHomePage = async (req, res) => {
  try {
    let config = await HomePage.findOne();
    if (config) {
      config = await HomePage.findByIdAndUpdate(config._id, req.body, { new: true, overwrite: true });
    } else {
      config = new HomePage(req.body);
      await config.save();
    }
    res.json(config);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
