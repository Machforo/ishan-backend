const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepageController');
const authMiddleware = require('../middleware/auth');

// Public route to fetch configuration
router.get('/', homepageController.getHomePage);

// Protected Admin route to mutate configuration
router.put('/', authMiddleware, homepageController.updateHomePage);

module.exports = router;
