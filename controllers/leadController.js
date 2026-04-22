const { IimtLead } = require('../models/iimtModels');
const { AyurvedaLead } = require('../models/ayurvedaModels');
const { HospitalLead } = require('../models/hospitalModels');
const { LegalLead } = require('../models/legalModels');
const { PharmacyLead } = require('../models/pharmacyModels');
const Lead = require('../models/Lead');

exports.getAllLeads = async (req, res) => {
    try {
        const [iimt, ayurveda, hospital, legal, pharmacy, generic] = await Promise.all([
            IimtLead.find().lean(),
            AyurvedaLead.find().lean(),
            HospitalLead.find().lean(),
            LegalLead.find().lean(),
            PharmacyLead.find().lean(),
            Lead.find().lean()
        ]);

        // Add site tags
        const allLeads = [
            ...iimt.map(l => ({ ...l, site: 'iimt' })),
            ...ayurveda.map(l => ({ ...l, site: 'ayurveda' })),
            ...hospital.map(l => ({ ...l, site: 'hospital' })),
            ...legal.map(l => ({ ...l, site: 'legal' })),
            ...pharmacy.map(l => ({ ...l, site: 'pharmacy' })),
            ...generic.map(l => ({ ...l, site: 'main' }))
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        res.json(allLeads);
    } catch (err) {
        res.status(500).json({ message: 'Error aggregating leads', error: err.message });
    }
};

exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createLead = async (req, res) => {
    try {
        const lead = new Lead(req.body);
        const newLead = await lead.save();
        res.status(201).json(newLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateLeadStatus = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.json(lead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
