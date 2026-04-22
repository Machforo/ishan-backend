const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Middleware to check if user is super_admin
const superAdminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'super_admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Super Admin only' });
    }
};

router.get('/', authMiddleware, superAdminOnly, userController.getUsers);
router.post('/', authMiddleware, superAdminOnly, userController.createUser);
router.put('/:id', authMiddleware, superAdminOnly, userController.updateUser);
router.delete('/:id', authMiddleware, superAdminOnly, userController.deleteUser);

module.exports = router;
