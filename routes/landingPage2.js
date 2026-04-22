const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const { LandingPage2 } = require('../models/LandingPageModels');

const Lead = require('../models/Lead');

router.get('/', genericCtrl.getSection(LandingPage2));
router.put('/', authMiddleware, genericCtrl.updateSection(LandingPage2));

// Leads
router.get('/leads', authMiddleware, genericCtrl.getCollection(Lead));
router.post('/leads', (req, res, next) => {
  req.body.source = "Landing Page 2";
  next();
}, genericCtrl.createItem(Lead));
router.delete('/leads/:id', authMiddleware, genericCtrl.deleteItem(Lead));

module.exports = router;
