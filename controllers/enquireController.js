const EnquirePage = require('../models/EnquirePage');

exports.getEnquirePage = async (req, res) => {
  try {
    let data = await EnquirePage.findOne();
    if (!data) {
      data = await EnquirePage.create({
        header: { title: "Enquire Now", subtitle: "Get personalized guidance from our counsellors — your dream career starts here." },
        programs: [],
        colleges: []
      });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEnquirePage = async (req, res) => {
  try {
    let data = await EnquirePage.findOne();
    if (!data) {
      data = new EnquirePage(req.body);
    } else {
      Object.assign(data, req.body);
    }
    const updatedData = await data.save();
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
