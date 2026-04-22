const express = require('express');
const router = express.Router();
const enquireController = require('../controllers/enquireController');
const authMiddleware = require('../middleware/auth');

router.get('/', enquireController.getEnquirePage);
router.put('/', authMiddleware, enquireController.updateEnquirePage);

module.exports = router;
