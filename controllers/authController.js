const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Ensure default admin exists
const ensureAdminExists = async () => {
    try {
        const superAdminEmail = 'super-admin@gmail.com';
        const existingSuper = await User.findOne({ email: superAdminEmail });
        if (!existingSuper) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin@123', salt);
            await User.create({ 
                email: superAdminEmail, 
                password: hashedPassword, 
                role: 'super_admin',
                permissions: {
                    sites: ['iimt', 'ayurveda', 'hospital', 'legal', 'pharmacy'],
                    sections: [], // Empty means full access for super_admin in logic
                    canCreate: true,
                    canUpdate: true,
                    canDelete: true
                }
            });
            console.log('Super Admin created: super-admin@gmail.com / admin@123');
        }
    } catch (err) {
        console.error('Error ensuring super admin exists:', err);
    }
};
ensureAdminExists();

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = { id: user._id, role: user.role, permissions: user.permissions };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'ishan_secret_123', { expiresIn: '1d' });

        res.json({ token, user: { id: user._id, email: user.email, role: user.role, permissions: user.permissions } });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
