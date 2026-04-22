const express = require('express');
const router = express.Router();
const controller = require('../controllers/aboutusController');
const auth = require('../middleware/auth');

router.get('/', controller.get);
router.put('/', auth, controller.update);

module.exports = router;
