const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/auth');

// Get all contacts (Public)
router.get('/', contentController.getContacts);

// Create a new contact (Protected)
router.post('/', authMiddleware, contentController.createContact);

// Update a contact (Protected)
router.put('/:id', authMiddleware, contentController.updateContact);

// Delete a contact (Protected)
router.delete('/:id', authMiddleware, contentController.deleteContact);

module.exports = router;
