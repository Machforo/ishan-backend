const express = require('express');
const router = express.Router();
const PageLayout = require('../models/PageLayout');
const GlobalSection = require('../models/GlobalSection');

// Default built-in sections for hospital pages
const DEFAULT_HOSPITAL_LAYOUTS = {
  homepage: [
    { id: 'banner', name: 'Hospital Banners & Settings (Hero)', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Patient Care Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'institutionalProfile', name: 'Institutional Profile (About Us)', type: 'builtin', order: 2, isHidden: false },
    { id: 'whyChooseUs', name: 'Why Choose Us', type: 'builtin', order: 3, isHidden: false },
    { id: 'departments', name: 'Clinical Departments Showcase', type: 'builtin', order: 4, isHidden: false },
    { id: 'panchkarmaHighlight', name: 'Panchkarma Highlight', type: 'builtin', order: 5, isHidden: false },
    { id: 'doctors', name: 'Medical Staff / Doctors', type: 'builtin', order: 6, isHidden: false },
    { id: 'testimonials', name: 'Patient Reviews', type: 'builtin', order: 7, isHidden: false },
    { id: 'gallery', name: 'Hospital Gallery (Life at Ishan)', type: 'builtin', order: 8, isHidden: false },
    { id: 'accreditations', name: 'Accreditations & Approvals', type: 'builtin', order: 9, isHidden: false }
  ],
  about_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'story', name: 'Our Story (Healing Legacy)', type: 'builtin', order: 1, isHidden: false },
    { id: 'missionVision', name: 'Mission & Vision + Values', type: 'builtin', order: 2, isHidden: false },
    { id: 'whyChooseUs', name: 'Why Choose Us (Reasons Grid)', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Consultation Booking CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  why_ishan: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'story', name: 'Our Healing Legacy & Story', type: 'builtin', order: 1, isHidden: false },
    { id: 'missionVision', name: 'Mission & Vision + Institutional Values', type: 'builtin', order: 2, isHidden: false },
    { id: 'whyChooseUs', name: 'Why Choose Us (Distinct Advantages)', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Consultation Booking CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  doctors: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'searchFilters', name: 'Speciality & Department Filter Badges', type: 'builtin', order: 1, isHidden: false },
    { id: 'doctorList', name: 'Doctors Grid & Booking Cards', type: 'builtin', order: 2, isHidden: false },
    { id: 'opdSchedule', name: 'Weekly OPD Schedule & Timetable', type: 'builtin', order: 3, isHidden: false },
    { id: 'patientCareStandards', name: 'Clinical Quality & Care Standards', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Emergency Helpline & Booking CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  departments: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'departmentList', name: 'Clinical Departments Showcase (9 Specialties)', type: 'builtin', order: 1, isHidden: false },
    { id: 'facilitiesOverview', name: 'In-House Diagnostics & Panchakarma Theatres', type: 'builtin', order: 2, isHidden: false },
    { id: 'holisticBenefits', name: 'Classical Healing & Pure Formulations', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Specialist Consultation CTA Banner', type: 'builtin', order: 4, isHidden: false }
  ],
  services: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'serviceList', name: 'Core Healthcare Services Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'specialCare', name: 'IPD In-Patient & Intensive Ayurvedic Care', type: 'builtin', order: 2, isHidden: false },
    { id: 'pharmacyLab', name: '24x7 Ayurvedic Pharmacy & Diagnostics Unit', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Appointment CTA Banner', type: 'builtin', order: 4, isHidden: false }
  ],
  faqs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'categoryTabs', name: 'FAQ Category Quick Tabs', type: 'builtin', order: 1, isHidden: false },
    { id: 'faqSection', name: 'Frequently Asked Questions Accordion', type: 'builtin', order: 2, isHidden: false },
    { id: 'askQuery', name: 'Ask Our Medical Team / Quick Query Card', type: 'builtin', order: 3, isHidden: false },
    { id: 'emergencyHelpline', name: '24x7 Patient Care Helpline Banner', type: 'builtin', order: 4, isHidden: false }
  ],
  appointment: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'quickHelp', name: 'Helpline & Instant WhatsApp Booking Cards', type: 'builtin', order: 1, isHidden: false },
    { id: 'formSection', name: 'Appointment Booking Interactive Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'guidelines', name: 'Pre-Consultation & Nadi Pariksha Instructions', type: 'builtin', order: 3, isHidden: false },
    { id: 'opdHoursCard', name: 'OPD Operating Hours & Hospital Location', type: 'builtin', order: 4, isHidden: false }
  ],
  contact: [
    { id: 'header', name: 'Page Header & Overview', type: 'builtin', order: 0, isHidden: false },
    { id: 'contactCards', name: 'Hospital Address, Emergency & OPD Contact Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'formSection', name: 'Direct Message & Patient Inquiry Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'mapLocation', name: 'Interactive Campus & Hospital Directions Map', type: 'builtin', order: 3, isHidden: false },
    { id: 'emergencyBanner', name: '24x7 Emergency Care Hotline Strip', type: 'builtin', order: 4, isHidden: false }
  ]
};

// Default built-in sections for Ayurveda portal (vedic-wellness-portal)
const DEFAULT_AYURVEDA_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'about', name: 'About', type: 'builtin', order: 2, isHidden: false },
    { id: 'programs', name: 'Programs', type: 'builtin', order: 3, isHidden: false },
    { id: 'why_iamc', name: 'Why Iamc', type: 'builtin', order: 4, isHidden: false },
    { id: 'placements', name: 'Placements', type: 'builtin', order: 5, isHidden: false },
    { id: 'faculty', name: 'Faculty', type: 'builtin', order: 6, isHidden: false },
    { id: 'campus', name: 'Campus', type: 'builtin', order: 7, isHidden: false },
    { id: 'news', name: 'News', type: 'builtin', order: 8, isHidden: false },
    { id: 'testimonials', name: 'Testimonials', type: 'builtin', order: 9, isHidden: false },
    { id: 'faqs', name: 'Faqs', type: 'builtin', order: 10, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 11, isHidden: false }
  ],
  about_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'story', name: 'Our Story & Heritage', type: 'builtin', order: 1, isHidden: false },
    { id: 'editorial', name: 'Editorial', type: 'builtin', order: 2, isHidden: false },
    { id: 'timeline', name: 'Timeline', type: 'builtin', order: 3, isHidden: false },
    { id: 'milestones', name: 'Milestones & History', type: 'builtin', order: 4, isHidden: false },
    { id: 'differentiators', name: 'Key Differentiators', type: 'builtin', order: 5, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 6, isHidden: false }
  ],
  principal_message: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'profile', name: "Principal's Profile & Photo", type: 'builtin', order: 1, isHidden: false },
    { id: 'message', name: "Welcome Message & Vision", type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  mission_vision: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "banner_image",
        "name": "Banner Image",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "vision",
        "name": "Vision Statement",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "mission",
        "name": "Mission Statement",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "values",
        "name": "Ayurvedic Principles & Values",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Photo & Media Gallery",
        "type": "builtin",
        "order": 5,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 6,
        "isHidden": false
    }
],
  approvals: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'approvals_grid', name: 'Statutory Approvals Grid', type: 'builtin', order: 1, isHidden: false }
  ],
  why_choose_us: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Why Study at IAMC",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "hospital_tieup",
        "name": "Attached 100+ Bed Ayurvedic Hospital",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "facilities_grid",
        "name": "Clinical & Research Advantages",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  mandatory_disclosure: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "disclosure_docs",
        "name": "NCISM & University Mandatory Disclosures",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    }
],
  code_of_conduct: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "conduct_rules",
        "name": "Campus Discipline & Conduct Code",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  faqs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'faq_accordion', name: 'Faq Accordion', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  departments: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'deptList', name: 'DeptList', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  scope_of_bams: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Career Pathways & Scope of BAMS",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "sectors_grid",
        "name": "Clinical Practice, Govt, Pharma & Research",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  syllabus: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'curriculum_overview', name: 'Curriculum Overview', type: 'builtin', order: 1, isHidden: false },
    { id: 'professional_years', name: 'Professional Years', type: 'builtin', order: 2, isHidden: false },
    { id: 'downloads', name: 'Downloads', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  admissions: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'alert_banner', name: 'Alert Banner', type: 'builtin', order: 1, isHidden: false },
    { id: 'process', name: 'Process', type: 'builtin', order: 2, isHidden: false },
    { id: 'documents', name: 'Documents', type: 'builtin', order: 3, isHidden: false },
    { id: 'scholarships', name: 'Scholarships', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  scholarships: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'scholarship_criteria', name: 'Scholarship Criteria', type: 'builtin', order: 1, isHidden: false },
    { id: 'financial_slabs', name: 'Financial Slabs', type: 'builtin', order: 2, isHidden: false },
    { id: 'process', name: 'Process', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  certificate_programs: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Value-Added Certifications Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "programs_list",
        "name": "Industry Certification Modules",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  facilities: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Campus Infrastructure & Herbal Farm",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "facilities_grid",
        "name": "Specialized Labs, Dissection & Pharmacy",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Campus Photo Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  herbal_garden: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Dravyaguna Herbal Garden & Demonstration Farm",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "species_grid",
        "name": "Rare Medicinal Plant Species Showcase",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Garden Photo Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  hostel: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'hostel_banner', name: 'Hostel Banner', type: 'builtin', order: 1, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 2, isHidden: false },
    { id: 'amenities_grid', name: 'Amenities Grid', type: 'builtin', order: 3, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  auditorium_sports: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Auditorium & Sports Complex Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "amenities_grid",
        "name": "Indoor Yoga Hall, Sports Grounds & Gym",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Sports & Event Facilities Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'leadership', name: 'Leadership', type: 'builtin', order: 1, isHidden: false },
    { id: 'facultyList', name: 'FacultyList', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  visiting_faculty: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Visiting & Guest Scholars Profile",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "faculty_grid",
        "name": "Visiting Professors Directory",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  news_events: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "featured",
        "name": "Featured Campus Announcements",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "events_list",
        "name": "All News & Events Feed",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  events_calendar: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "calendar_view",
        "name": "Academic & Event Calendar",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "upcoming_list",
        "name": "Upcoming Schedule List",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  photo_gallery: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "category_filters",
        "name": "Category Filter Tabs",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "gallery_grid",
        "name": "Campus Photo Gallery Grid",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  video_gallery: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "video_grid",
        "name": "Video Tours & Student Stories",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  press_coverage: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "press_clippings",
        "name": "Print & Digital Media Coverage",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  downloads: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'download_list', name: 'Download List', type: 'builtin', order: 1, isHidden: false }
  ],
  past_papers: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "filter_bar",
        "name": "Semester & Subject Filter Bar",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "papers_list",
        "name": "Past Exam Question Papers",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  fee_payment: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "payment_methods",
        "name": "Online Payment Gateway Options",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "bank_details",
        "name": "Official Bank Account Details",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Fee Support Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  student_portal: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "portal_links",
        "name": "ERP, LMS & Library Quick Links",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "announcements",
        "name": "Student Notice Board",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Student Support Helpline",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  placements: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats_bar', name: 'Stats Bar', type: 'builtin', order: 1, isHidden: false },
    { id: 'placementList', name: 'PlacementList', type: 'builtin', order: 2, isHidden: false },
    { id: 'success_stories', name: 'Success Stories', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  research: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Ayurvedic Research & Clinical Trials",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "projects_list",
        "name": "Ongoing Drug Standardization & Trials",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Research Laboratories Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  research_journal: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "journal_overview",
        "name": "IIMT Journal of Management & IT",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "editorial_board",
        "name": "Editorial Board Members",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "call_for_papers",
        "name": "Call for Research Papers & Guidelines",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  publications: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'publications_list', name: 'Publications List', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  alumni_network: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "IAMC Vaidya Alumni Association",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "distinguished_alumni",
        "name": "Renowned Ayurvedic Practitioners & Alumni",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "register_form",
        "name": "Alumni Registration & Directory",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  contact: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'contact_cards', name: 'Contact & Location Info Cards', type: 'builtin', order: 1, isHidden: false },
    { id: 'contactForm', name: 'ContactForm', type: 'builtin', order: 2, isHidden: false },
    { id: 'map', name: 'Map', type: 'builtin', order: 3, isHidden: false }
  ],
  feedback: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'feedback_form', name: 'Feedback Form', type: 'builtin', order: 1, isHidden: false }
  ],
  careers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'careers_list', name: 'Careers List', type: 'builtin', order: 1, isHidden: false }
  ]
};

// Default built-in sections for IIMT / Ascend portal (ishan-ascend)
const DEFAULT_IIMT_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'about', name: 'About', type: 'builtin', order: 2, isHidden: false },
    { id: 'programs', name: 'Programs', type: 'builtin', order: 3, isHidden: false },
    { id: 'why_iimt', name: 'Why Iimt', type: 'builtin', order: 4, isHidden: false },
    { id: 'placements', name: 'Placements', type: 'builtin', order: 5, isHidden: false },
    { id: 'faculty', name: 'Faculty', type: 'builtin', order: 6, isHidden: false },
    { id: 'campus', name: 'Campus', type: 'builtin', order: 7, isHidden: false },
    { id: 'news', name: 'News', type: 'builtin', order: 8, isHidden: false },
    { id: 'testimonials', name: 'Testimonials', type: 'builtin', order: 9, isHidden: false },
    { id: 'faqs', name: 'Faqs', type: 'builtin', order: 10, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 11, isHidden: false }
  ],
  about_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'content', name: 'Content', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  director_message: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'profile', name: "Director Profile & Leadership", type: 'builtin', order: 1, isHidden: false },
    { id: 'message', name: "Director Welcome Message", type: 'builtin', order: 2, isHidden: false },
    { id: 'candid_image', name: "Campus Setting & Photo", type: 'builtin', order: 3, isHidden: false },
    { id: 'gallery', name: "Campus Leadership Gallery", type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: "Admissions Enquiry CTA", type: 'builtin', order: 5, isHidden: false }
  ],
  mission_vision: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'vision', name: 'Vision Statement', type: 'builtin', order: 2, isHidden: false },
    { id: 'mission', name: 'Mission Statement', type: 'builtin', order: 3, isHidden: false },
    { id: 'core_values', name: 'Core Values & Ethics', type: 'builtin', order: 4, isHidden: false },
    { id: 'editorial_photos', name: 'Editorial Photos', type: 'builtin', order: 5, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 6, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 7, isHidden: false }
  ],
  approvals: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'approvals_grid', name: 'Statutory Approvals Grid', type: 'builtin', order: 1, isHidden: false }
  ],
  why_iimt: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  best_practices: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "banner_image",
        "name": "Banner Image",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "practices_list",
        "name": "NAAC Best Practices List",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Photo & Media Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  green_initiatives: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "banner_image",
        "name": "Banner Image",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "initiatives_list",
        "name": "Green Campus Initiatives",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Green Campus Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  mandatory_disclosure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'compliance_statement', name: 'Compliance Statement', type: 'builtin', order: 1, isHidden: false }
  ],
  education_overview: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Academic Framework & Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "programs_grid",
        "name": "Degree Programs Directory",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "pedagogy_highlights",
        "name": "Teaching Pedagogy & Methodology",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  pedagogy_labs: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Pedagogy & Experiential Learning",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "labs_grid",
        "name": "Computer Labs & Simulation Facilities",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Laboratories Photo Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  certificate_programs: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Value-Added Certifications Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "programs_list",
        "name": "Industry Certification Modules",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  skill_development: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Skill Cell Framework & Vision",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "modules_grid",
        "name": "Communication & Tech Skill Tracks",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Training Workshops Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  e_cell: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "about",
        "name": "About E-Cell & Incubation Hub",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "offerings",
        "name": "Mentorship & Venture Offerings",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "internships",
        "name": "Corporate Internship Programs",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "stories",
        "name": "Entrepreneurial Success Stories",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 5,
        "isHidden": false
    }
],
  guest_lectures: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Corporate Leader Series Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "lectures_grid",
        "name": "Recent & Upcoming Guest Lectures",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Session Highlights Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  industrial_visits: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Experiential Industry Visits Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "visits_grid",
        "name": "Corporate & Plant Excursions",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Industrial Visit Photo Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  debates_gd: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Public Speaking & GD Overview",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "activities_grid",
        "name": "Debates, GDs & Mock Parliament",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "gallery",
        "name": "Activity Photo Gallery",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  news_events: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "featured",
        "name": "Featured Campus Announcements",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "events_list",
        "name": "All News & Events Feed",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  infrastructure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  auditorium: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  sports: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  library: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  it_lab: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  hostel: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  cultural_activities: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  events_calendar: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "calendar_view",
        "name": "Academic & Event Calendar",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "upcoming_list",
        "name": "Upcoming Schedule List",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  faqs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'faq_accordion', name: 'Faq Accordion', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  photo_gallery: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "category_filters",
        "name": "Category Filter Tabs",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "gallery_grid",
        "name": "Campus Photo Gallery Grid",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  video_gallery: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "video_grid",
        "name": "Video Tours & Student Stories",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  press_coverage: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "press_clippings",
        "name": "Print & Digital Media Coverage",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  downloads: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'download_list', name: 'Download List', type: 'builtin', order: 1, isHidden: false }
  ],
  past_papers: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "filter_bar",
        "name": "Semester & Subject Filter Bar",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "papers_list",
        "name": "Past Exam Question Papers",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  code_of_conduct: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "conduct_rules",
        "name": "Campus Discipline & Conduct Code",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  fee_payment: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "payment_methods",
        "name": "Online Payment Gateway Options",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "bank_details",
        "name": "Official Bank Account Details",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Fee Support Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  student_portal: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "portal_links",
        "name": "ERP, LMS & Library Quick Links",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "announcements",
        "name": "Student Notice Board",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Student Support Helpline",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  admissions: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'alert_banner', name: 'Alert Banner', type: 'builtin', order: 1, isHidden: false },
    { id: 'how_to_apply', name: 'How To Apply', type: 'builtin', order: 2, isHidden: false },
    { id: 'documents', name: 'Documents', type: 'builtin', order: 3, isHidden: false },
    { id: 'contact_card', name: 'Contact Card', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  admissions_enquiry: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "enquiry_form",
        "name": "Admissions Enquiry Form",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "counselling_info",
        "name": "Counseling & Helpline Cards",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
],
  consultation: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'booking_form', name: 'Booking Form', type: 'builtin', order: 1, isHidden: false }
  ],
  scholarships: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'scholarships_list', name: 'Scholarships List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  placements: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats_bar', name: 'Stats Bar', type: 'builtin', order: 1, isHidden: false },
    { id: 'recruiters', name: 'Recruiters', type: 'builtin', order: 2, isHidden: false },
    { id: 'process', name: 'Process', type: 'builtin', order: 3, isHidden: false },
    { id: 'success_stories', name: 'Success Stories', type: 'builtin', order: 4, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 5, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 6, isHidden: false }
  ],
  research_journal: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "journal_overview",
        "name": "IIMT Journal of Management & IT",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "editorial_board",
        "name": "Editorial Board Members",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "call_for_papers",
        "name": "Call for Research Papers & Guidelines",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 4,
        "isHidden": false
    }
],
  faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'core_faculty_grid', name: 'Core Faculty Grid', type: 'builtin', order: 1, isHidden: false }
  ],
  visiting_faculty: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "overview",
        "name": "Visiting & Guest Scholars Profile",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "faculty_grid",
        "name": "Visiting Professors Directory",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "cta",
        "name": "Admissions Enquiry CTA",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  contact: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'contact_cards', name: 'Contact & Location Info Cards', type: 'builtin', order: 1, isHidden: false },
    { id: 'contact_form', name: 'Contact Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'campus_map', name: 'Campus Map', type: 'builtin', order: 3, isHidden: false }
  ],
  careers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'careers_list', name: 'Careers List', type: 'builtin', order: 1, isHidden: false }
  ],
  feedback: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'feedback_form', name: 'Feedback Form', type: 'builtin', order: 1, isHidden: false }
  ],
  anti_ragging: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "policy_statement",
        "name": "UGC Zero-Tolerance Anti-Ragging Policy",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "committee_members",
        "name": "Anti-Ragging Squad & Committee",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "helpline",
        "name": "24x7 Emergency Anti-Ragging Helpline",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  grievance_redressal: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "grievance_mechanism",
        "name": "Internal Grievance Redressal Procedure",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "committee",
        "name": "Grievance Redressal Committee",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    },
    {
        "id": "submission_form",
        "name": "Submit Online Grievance Form",
        "type": "builtin",
        "order": 3,
        "isHidden": false
    }
],
  privacy_policy: [
    {
        "id": "header",
        "name": "Page Header & Intro",
        "type": "builtin",
        "order": 0,
        "isHidden": false
    },
    {
        "id": "policy_content",
        "name": "Data Protection & Privacy Policy",
        "type": "builtin",
        "order": 1,
        "isHidden": false
    },
    {
        "id": "contact_dpo",
        "name": "Data Protection Officer Contact",
        "type": "builtin",
        "order": 2,
        "isHidden": false
    }
]
};

// Default built-in sections for Legal portal (apex-legal / Ishan Law)
const DEFAULT_LEGAL_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'about', name: 'About', type: 'builtin', order: 2, isHidden: false },
    { id: 'programs', name: 'Programs', type: 'builtin', order: 3, isHidden: false },
    { id: 'why_ishan_law', name: 'Why Ishan Law', type: 'builtin', order: 4, isHidden: false },
    { id: 'placements', name: 'Placements', type: 'builtin', order: 5, isHidden: false },
    { id: 'faculty', name: 'Faculty', type: 'builtin', order: 6, isHidden: false },
    { id: 'campus', name: 'Campus', type: 'builtin', order: 7, isHidden: false },
    { id: 'news', name: 'News', type: 'builtin', order: 8, isHidden: false },
    { id: 'testimonials', name: 'Testimonials', type: 'builtin', order: 9, isHidden: false },
    { id: 'faqs', name: 'Faqs', type: 'builtin', order: 10, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 11, isHidden: false }
  ],
  about_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'story', name: 'Our Story & Heritage', type: 'builtin', order: 2, isHidden: false },
    { id: 'milestones', name: 'Milestones & History', type: 'builtin', order: 3, isHidden: false },
    { id: 'differentiators', name: 'Key Differentiators', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  principal_message: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'profile', name: 'Principal\'s Portrait & Welcome', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  director_message: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'profile', name: 'Principal\'s Portrait & Welcome', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  mission_vision: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'vision', name: 'Vision Statement', type: 'builtin', order: 2, isHidden: false },
    { id: 'mission', name: 'Mission Statement', type: 'builtin', order: 3, isHidden: false },
    { id: 'core_values', name: 'Core Values & Ethics', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  approvals: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'approvals_list', name: 'Regulatory Approvals & Recognition', type: 'builtin', order: 1, isHidden: false }
  ],
  why_choose_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  best_practices: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'practices_list', name: 'Practices List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  green_initiatives: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'initiatives_list', name: 'Initiatives List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  mandatory_disclosure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'disclosure_documents', name: 'Mandatory Disclosure Documents', type: 'builtin', order: 1, isHidden: false }
  ],
  moot_court: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'features', name: 'Features', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  legal_aid_cell: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 2, isHidden: false },
    { id: 'initiatives', name: 'Legal Aid Clinics & Free Consultation', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  court_jail_visits: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'visits_grid', name: 'Court, Jail & Police Station Visits Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  guest_lectures: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'lectures_grid', name: 'Lectures Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  debates_gd: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'activities_grid', name: 'Activities Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  skill_development: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'programs_grid', name: 'Programs & Short-Term Courses Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  cultural_activities: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  internship_externship: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  education_overview: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'programs_list', name: 'Law Degree Programs (BA LLB / LLB)', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  certificate_programs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'certificate_list', name: 'Certificate List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  infrastructure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  library: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  it_lab: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  auditorium: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  hostel: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  sports: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  admissions: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  admissions_enquiry: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'enquiry_section', name: 'Enquiry Section', type: 'builtin', order: 1, isHidden: false }
  ],
  consultation: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'booking_form', name: 'Booking Form', type: 'builtin', order: 1, isHidden: false }
  ],
  scholarships: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'scholarships_list', name: 'Scholarships List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  placements: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  alumni_network: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'alumni_directory', name: 'Alumni Network & Directory', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  research_journal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'journal_details', name: 'Journal Details', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  publications: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'publications_list', name: 'Publications List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'faculty_grid', name: 'Faculty Directory & Profile Cards', type: 'builtin', order: 1, isHidden: false }
  ],
  visiting_faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'visiting_grid', name: 'Visiting Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  news_events: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'news_list', name: 'News & Campus Updates', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  events_calendar: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'calendar_schedule', name: 'Calendar Schedule', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  photo_gallery: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'photo_grid', name: 'Photo Gallery Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  video_gallery: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'video_grid', name: 'Video Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  press_coverage: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'press_clippings', name: 'Press Clippings', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  downloads: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'downloads_list', name: 'Downloads List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  past_papers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'paper_catalog', name: 'Paper Catalog', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  code_of_conduct: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'content', name: 'Content', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  fee_payment: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'payment_portal', name: 'Payment Portal', type: 'builtin', order: 1, isHidden: false }
  ],
  student_portal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'portal_links', name: 'Portal Links', type: 'builtin', order: 1, isHidden: false }
  ],
  faqs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'faqs_content', name: 'Frequently Asked Questions', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  contact: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false }
  ],
  careers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'careers_list', name: 'Careers List', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  feedback: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'feedback_form', name: 'Feedback Form', type: 'builtin', order: 1, isHidden: false }
  ],
  anti_ragging: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'helpline', name: 'Anti-Ragging Squad & Helpline', type: 'builtin', order: 1, isHidden: false },
    { id: 'policy_content', name: 'Anti-Ragging Regulations & Policy', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  grievance_redressal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'grievance_content', name: 'Grievance Content', type: 'builtin', order: 1, isHidden: false },
    { id: 'contact_form', name: 'Contact Form', type: 'builtin', order: 2, isHidden: false }
  ],
  privacy_policy: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'policy_content', name: 'Anti-Ragging Regulations & Policy', type: 'builtin', order: 1, isHidden: false }
  ]
};

// Default built-in sections for Pharmacy portal (ishan-pharmacy-vision / Ishan Pharmacy)
const DEFAULT_PHARMACY_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'about', name: 'About', type: 'builtin', order: 2, isHidden: false },
    { id: 'programs', name: 'Programs', type: 'builtin', order: 3, isHidden: false },
    { id: 'why_us', name: 'Why Us', type: 'builtin', order: 4, isHidden: false },
    { id: 'placements', name: 'Placements', type: 'builtin', order: 5, isHidden: false },
    { id: 'faculty', name: 'Faculty', type: 'builtin', order: 6, isHidden: false },
    { id: 'campus', name: 'Campus', type: 'builtin', order: 7, isHidden: false },
    { id: 'news', name: 'News', type: 'builtin', order: 8, isHidden: false },
    { id: 'testimonials', name: 'Testimonials', type: 'builtin', order: 9, isHidden: false },
    { id: 'faqs', name: 'Faqs', type: 'builtin', order: 10, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 11, isHidden: false }
  ],
  about_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'story', name: 'Our Story & Heritage', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'milestones', name: 'Milestones & History', type: 'builtin', order: 4, isHidden: false },
    { id: 'differentiators', name: 'Key Differentiators', type: 'builtin', order: 5, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 6, isHidden: false }
  ],
  principal_message: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'message', name: 'Welcome Address & Academic Vision', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  mission_vision: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'vision', name: 'Vision Statement', type: 'builtin', order: 2, isHidden: false },
    { id: 'mission', name: 'Mission Statement', type: 'builtin', order: 3, isHidden: false },
    { id: 'core_values', name: 'Core Values & Ethics', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  why_choose_us: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  approvals: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'approvals_grid', name: 'Statutory Approvals Grid', type: 'builtin', order: 1, isHidden: false }
  ],
  mandatory_disclosure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'compliance_statement', name: 'Compliance Statement', type: 'builtin', order: 1, isHidden: false },
    { id: 'documents_table', name: 'Documents Table', type: 'builtin', order: 2, isHidden: false }
  ],
  code_of_conduct: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'code_content', name: 'Code Content', type: 'builtin', order: 1, isHidden: false },
    { id: 'guidelines', name: 'Eligibility & Application Guidelines', type: 'builtin', order: 2, isHidden: false }
  ],
  faqs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'category_tabs', name: 'Category Tabs', type: 'builtin', order: 1, isHidden: false },
    { id: 'faq_accordion', name: 'Faq Accordion', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  education_overview: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'curriculum_standards', name: 'Curriculum & Academic Standards', type: 'builtin', order: 1, isHidden: false },
    { id: 'b_pharm_highlight', name: 'B.Pharm Program Highlight', type: 'builtin', order: 2, isHidden: false },
    { id: 'd_pharm_highlight', name: 'D.Pharm Program Highlight', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  admissions: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'alert_banner', name: 'Alert Banner', type: 'builtin', order: 1, isHidden: false },
    { id: 'steps', name: 'Steps', type: 'builtin', order: 2, isHidden: false },
    { id: 'eligibility', name: 'Eligibility', type: 'builtin', order: 3, isHidden: false },
    { id: 'documents', name: 'Documents', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  admissions_enquiry: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'info', name: 'Info', type: 'builtin', order: 1, isHidden: false },
    { id: 'counselling', name: 'Counselling', type: 'builtin', order: 2, isHidden: false },
    { id: 'portal_info', name: 'Portal Info', type: 'builtin', order: 3, isHidden: false },
    { id: 'form', name: 'Form', type: 'builtin', order: 4, isHidden: false }
  ],
  scholarships: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'guidelines', name: 'Eligibility & Application Guidelines', type: 'builtin', order: 1, isHidden: false },
    { id: 'merit_scholarships', name: 'Merit & Need-Based Scholarships', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  certificate_programs: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'certification_partners', name: 'Certification Partners & Value-Add', type: 'builtin', order: 1, isHidden: false },
    { id: 'programs_grid', name: 'Programs & Short-Term Courses Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  consultation: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'counselors_info', name: 'Counseling Cell & Helpdesk', type: 'builtin', order: 1, isHidden: false },
    { id: 'consultation_form', name: 'Career Consultation Booking Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  fee_payment: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'fee_schedule', name: 'Fee Schedule', type: 'builtin', order: 1, isHidden: false },
    { id: 'online_payment_gateway', name: 'Online Payment Gateway', type: 'builtin', order: 2, isHidden: false },
    { id: 'helpdesk', name: 'Helpdesk', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'search_filter', name: 'Search Filter', type: 'builtin', order: 1, isHidden: false },
    { id: 'faculty_grid', name: 'Faculty Directory & Profile Cards', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  visiting_faculty: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'academic_collaborators', name: 'Academic & Industry Collaborators', type: 'builtin', order: 1, isHidden: false },
    { id: 'experts_grid', name: 'Visiting Faculty & Scientists Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  pharmaceutical_chemistry: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'equipment_specs', name: 'Analytical Instruments & Equipment', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  pharmaceutics: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'formulation_equipment', name: 'Formulation & Manufacturing Equipment', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  pharmacognosy: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'crude_drugs_collection', name: 'Crude Drugs & Specimen Herbarium', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  pharmacology: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'screening_units', name: 'Pharmacological Screening & Test Stations', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  pharmacy_practice: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'clinical_setup', name: 'Clinical Pharmacy Setup & Drug Info Desk', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  human_anatomy: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'anatomical_models', name: 'Anatomical Models & Charts', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  herbal_garden: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'medicinal_plant_species', name: 'Medicinal Plant Species & Plots', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  machine_room: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'industrial_machinery', name: 'Industrial Machinery & Pilot Plant', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  museum_computer_lab: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'museum_exhibits', name: 'Pharmaceutical History & Museum Exhibits', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  infrastructure: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'amenities_overview', name: 'Campus Amenities Overview', type: 'builtin', order: 1, isHidden: false },
    { id: 'facilities_grid', name: 'Facilities & Infrastructure Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  library: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'e_journals_books', name: 'Library Holdings & Digital E-Journals', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  hostel: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'rooms_amenities', name: 'Hostel Rooms & Residential Amenities', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  auditorium_sports: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'facilities_grid', name: 'Facilities & Infrastructure Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  news_events: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'featured_news', name: 'Featured News', type: 'builtin', order: 1, isHidden: false },
    { id: 'events_list', name: 'Events List', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  events_calendar: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'calendar_schedule', name: 'Calendar Schedule', type: 'builtin', order: 1, isHidden: false },
    { id: 'upcoming_workshops', name: 'Upcoming Workshops', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  guest_lectures: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'distinguished_speakers', name: 'Distinguished Speakers', type: 'builtin', order: 1, isHidden: false },
    { id: 'lecture_archive', name: 'Lecture Archive', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  industrial_visits: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'pharma_plants_visited', name: 'Pharma Plants Visited', type: 'builtin', order: 1, isHidden: false },
    { id: 'visit_reports', name: 'Visit Reports', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Photo & Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  photo_gallery: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'category_tabs', name: 'Category Tabs', type: 'builtin', order: 1, isHidden: false },
    { id: 'photo_grid', name: 'Photo Gallery Grid', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  video_gallery: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'video_grid', name: 'Video Grid', type: 'builtin', order: 1, isHidden: false },
    { id: 'campus_tours', name: 'Campus Tours', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  press_coverage: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'media_articles', name: 'Media Articles', type: 'builtin', order: 1, isHidden: false },
    { id: 'press_clippings', name: 'Press Clippings', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  downloads: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'forms_brochures', name: 'Forms Brochures', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  past_papers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'year_tabs', name: 'Year Tabs', type: 'builtin', order: 1, isHidden: false },
    { id: 'question_paper_catalog', name: 'Question Paper Catalog', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  student_portal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'portal_links', name: 'Portal Links', type: 'builtin', order: 1, isHidden: false },
    { id: 'academic_resources', name: 'Academic Resources', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  placements: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'placement_stats', name: 'Placement Stats', type: 'builtin', order: 1, isHidden: false },
    { id: 'top_pharma_recruiters', name: 'Top Pharma Recruiters', type: 'builtin', order: 2, isHidden: false },
    { id: 'process', name: 'Process', type: 'builtin', order: 3, isHidden: false },
    { id: 'success_stories', name: 'Success Stories', type: 'builtin', order: 4, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 5, isHidden: false }
  ],
  research_projects: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'ongoing_research', name: 'Ongoing Research', type: 'builtin', order: 1, isHidden: false },
    { id: 'grants_collaborations', name: 'Grants Collaborations', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  research_journal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'overview', name: 'Overview & Highlights', type: 'builtin', order: 1, isHidden: false },
    { id: 'editorial_board', name: 'Editorial Board', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  publications: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'faculty_papers', name: 'Faculty Papers', type: 'builtin', order: 1, isHidden: false },
    { id: 'patents_published', name: 'Patents Published', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  alumni_network: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'alumni_directory', name: 'Alumni Network & Directory', type: 'builtin', order: 1, isHidden: false },
    { id: 'testimonials', name: 'Testimonials', type: 'builtin', order: 2, isHidden: false },
    { id: 'registration_form', name: 'Registration Form', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ],
  contact: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'contact_cards', name: 'Contact & Location Info Cards', type: 'builtin', order: 1, isHidden: false },
    { id: 'inquiry_form', name: 'Inquiry Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'campus_map', name: 'Campus Map', type: 'builtin', order: 3, isHidden: false },
    { id: 'emergency_contacts', name: 'Emergency Contacts', type: 'builtin', order: 4, isHidden: false }
  ],
  careers: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'job_openings', name: 'Job Openings', type: 'builtin', order: 1, isHidden: false },
    { id: 'cv_submission_form', name: 'Cv Submission Form', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  feedback: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'feedback_form', name: 'Feedback Form', type: 'builtin', order: 1, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 2, isHidden: false }
  ],
  thank_you: [
    { id: 'confirmation_card', name: 'Confirmation Card', type: 'builtin', order: 0, isHidden: false },
    { id: 'explore_links', name: 'Explore Links', type: 'builtin', order: 1, isHidden: false }
  ],
  anti_ragging: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'policy_content', name: 'Anti-Ragging Regulations & Policy', type: 'builtin', order: 1, isHidden: false },
    { id: 'helpline', name: 'Anti-Ragging Squad & Helpline', type: 'builtin', order: 2, isHidden: false },
    { id: 'cta', name: 'Admissions Enquiry CTA', type: 'builtin', order: 3, isHidden: false }
  ],
  grievance_redressal: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'grievance_content', name: 'Grievance Content', type: 'builtin', order: 1, isHidden: false },
    { id: 'contact_form', name: 'Contact Form', type: 'builtin', order: 2, isHidden: false }
  ],
  privacy_policy: [
    { id: 'header', name: 'Page Header & Intro', type: 'builtin', order: 0, isHidden: false },
    { id: 'policy_content', name: 'Anti-Ragging Regulations & Policy', type: 'builtin', order: 1, isHidden: false }
  ]
};

// Default built-in sections for Landing Page 1 (ishan-landing-page-1 / Variant A)
const DEFAULT_LANDING1_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero Carousel & Admissions Banner', type: 'builtin', order: 0, isHidden: false },
    { id: 'marquee', name: 'Global Notification Marquee', type: 'builtin', order: 1, isHidden: false },
    { id: 'colleges', name: '5 Colleges Grid (Law, IIMT, Pharmacy, Ayurveda, Education)', type: 'builtin', order: 2, isHidden: false },
    { id: 'programmes', name: 'Academic Programme Explorer (UG, PG, Diploma, Doctoral)', type: 'builtin', order: 3, isHidden: false },
    { id: 'about', name: 'About Ishan Educational Group (Heritage Since 1994)', type: 'builtin', order: 4, isHidden: false },
    { id: 'campus_life', name: 'Campus Life & Student Facilities', type: 'builtin', order: 5, isHidden: false },
    { id: 'research', name: 'Research Hub, Publications & Innovations', type: 'builtin', order: 6, isHidden: false },
    { id: 'placements', name: 'Placement Support, Packages & Top Recruiters', type: 'builtin', order: 7, isHidden: false },
    { id: 'happenings', name: 'Campus News, Events & Workshops', type: 'builtin', order: 8, isHidden: false },
    { id: 'social_wall', name: 'Instagram Social Wall & Life @ Ishan', type: 'builtin', order: 9, isHidden: false },
    { id: 'contact', name: 'Admissions Enquiry Form & Campus Location', type: 'builtin', order: 10, isHidden: false },
    { id: 'page_gallery', name: 'Global Page Gallery Strip', type: 'builtin', order: 11, isHidden: false }
  ]
};

// Default built-in sections for Landing Page 2 (ishan-landing-page-1-branch2 / Variant B)
const DEFAULT_LANDING2_LAYOUTS = {
  homepage: [
    { id: 'hero', name: 'Hero V2 with Direct Enquiry Form', type: 'builtin', order: 0, isHidden: false },
    { id: 'stats', name: 'Key Metrics & Stat Strip (30+ Years, 50k+ Alumni)', type: 'builtin', order: 1, isHidden: false },
    { id: 'placements', name: 'Corporate Recruiters & Placement Highlights', type: 'builtin', order: 2, isHidden: false },
    { id: 'colleges', name: '5 Colleges Interactive Strip', type: 'builtin', order: 3, isHidden: false },
    { id: 'programmes', name: 'Programmes & Degrees Directory', type: 'builtin', order: 4, isHidden: false },
    { id: 'about', name: 'About V2 Visual Heritage & Leadership', type: 'builtin', order: 5, isHidden: false },
    { id: 'research', name: 'Academic Research & Innovations Hub', type: 'builtin', order: 6, isHidden: false },
    { id: 'campus_life', name: 'Campus Experience & Amenities', type: 'builtin', order: 7, isHidden: false },
    { id: 'happenings', name: 'Recent Happenings & Campus Buzz', type: 'builtin', order: 8, isHidden: false },
    { id: 'contact', name: 'Admissions Consultation & Map', type: 'builtin', order: 9, isHidden: false },
    { id: 'page_gallery', name: 'Global Page Gallery Strip', type: 'builtin', order: 10, isHidden: false }
  ]
};

// URL path mapping for pages to unify with URL-based sections (GlobalSection)
const PAGE_URL_MAP = {
  // Common / Shared
  homepage: '/',
  about_us: '/about',
  contact: '/contact',
  placements: '/placements',
  research: '/research-projects',
  research_journal: '/research-journal',
  publications: '/publications',
  alumni_network: '/alumni-network',
  facilities: '/infrastructure',
  infrastructure: '/infrastructure',
  faculty: '/faculty',
  visiting_faculty: '/visiting-faculty',
  news_events: '/news-events',
  events_calendar: '/events-calendar',
  photo_gallery: '/photo-gallery',
  video_gallery: '/video-gallery',
  press_coverage: '/press-coverage',
  downloads: '/downloads',
  past_papers: '/past-papers',
  code_of_conduct: '/code-of-conduct',
  fee_payment: '/fee-payment',
  student_portal: '/student-portal',
  admissions: '/admissions',
  scholarships: '/scholarships',
  certificate_programs: '/certificate-programs',
  faqs: '/faqs',
  careers: '/careers',
  feedback: '/feedback',
  mandatory_disclosure: '/mandatory-disclosure',
  approvals: '/approvals',
  mission_vision: '/mission-vision',

  // Hospital
  doctors: '/doctors',
  departments: '/departments',
  services: '/patient-services',
  appointment: '/appointment',

  // Ayurveda
  principal_message: '/principal-message',
  why_choose_us: '/why-choose-us',
  scope_of_bams: '/scope-of-bams',
  syllabus: '/syllabus',
  herbal_garden: '/herbal-garden',
  auditorium_sports: '/auditorium-sports',

  // 14 Ayurvedic Departments
  ayurvedic_siddhanta: '/ayurvedic-siddhanta',
  rachana_sharir: '/rachana-sharir',
  kriya_sharir: '/kriya-sharir',
  dravyaguna_vigyana: '/dravyaguna-vigyana',
  rasa_shastra: '/rasa-shastra',
  kaumarabhritya: '/kaumarabhritya',
  prasuti_stri_roga: '/prasuti-stri-roga',
  kayachikitsa: '/kayachikitsa',
  panchkarma: '/panchkarma',
  shalya_tantra: '/shalya-tantra',
  shalakya_tantra: '/shalakya-tantra',
  swasthavritta_yoga: '/swasthavritta-yoga',
  agada_tantra: '/agada-tantra',
  samhita_sanskrit: '/samhita-sanskrit',

  // IIMT / Ascend Subpages
  director_message: '/director-message',
  why_iimt: '/why-iimt',
  best_practices: '/best-practices',
  green_initiatives: '/green-initiatives',
  education_overview: '/education-overview',
  pedagogy_labs: '/pedagogy-labs',
  skill_development: '/skill-development',
  e_cell: '/e-cell',
  guest_lectures: '/guest-lectures',
  industrial_visits: '/industrial-visits',
  debates_gd: '/debates-gd',
  auditorium: '/auditorium',
  sports: '/sports',
  library: '/library',
  it_lab: '/it-lab',
  hostel: '/hostel',
  cultural_activities: '/cultural-activities',
  admissions_enquiry: '/admissions-enquiry',
  consultation: '/consultation',
  anti_ragging: '/anti-ragging',
  grievance_redressal: '/grievance-redressal',
  privacy_policy: '/privacy-policy',
  campus_life: '/campus-life',
  principal_message: '/principal-message',
  director_message: '/director-message',

  // Legal Subpages
  moot_court: '/moot-court',
  legal_aid_cell: '/legal-aid-cell',
  court_jail_visits: '/court-jail-visits',
  internship_externship: '/internship-externship',
  programs_overview: '/programs-overview',

  // Pharmacy Subpages
  pharmaceutical_chemistry: '/pharmaceutical-chemistry',
  pharmaceutics: '/pharmaceutics',
  pharmacognosy: '/pharmacognosy',
  pharmacology: '/pharmacology',
  pharmacy_practice: '/pharmacy-practice',
  human_anatomy: '/human-anatomy',
  herbal_garden: '/herbal-garden',
  machine_room: '/machine-room',
  museum_computer_lab: '/museum-computer-lab',
  auditorium_sports: '/auditorium-sports'
};

// Aliases for pageId matching
const normalizePageId = (pageId) => {
  if (!pageId) return 'homepage';
  const raw = pageId.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
  if (!raw || raw === 'home' || raw === 'index') return 'homepage';
  if (raw === 'about' || raw === 'why-ishan' || raw === 'whyishan' || raw === 'about-us' || raw === 'aboutus') return 'about_us';
  if (raw === 'doctor' || raw === 'medical-team') return 'doctors';
  if (raw === 'department') return 'departments';
  if (raw === 'patient-services' || raw === 'patient_services') return 'services';
  if (raw === 'patient-faqs' || raw === 'patient_faqs' || raw === 'patient-services/faqs') return 'faqs';
  if (raw === 'academic' || raw === 'academics-overview') return 'academics';
  if (raw === 'admission') return 'admissions';
  if (raw === 'infrastructure' || raw === 'facility') return 'facilities';
  if (raw === 'placement') return 'placements';
  if (raw === 'moot-court' || raw === 'mootcourt') return 'moot_court';
  if (raw === 'legal-aid-cell' || raw === 'legalaidcell') return 'legal_aid_cell';
  if (raw === 'court-jail-visits' || raw === 'industrial-visits' || raw === 'industrialvisits') return 'court_jail_visits';
  if (raw === 'programs-overview' || raw === 'education-overview' || raw === 'programsoverview') return 'education_overview';
  if (raw === 'why-choose-us' || raw === 'why-ishan-law' || raw === 'whyishanlaw') return 'why_choose_us';
  if (raw === 'principal-message' || raw === 'principalmessage') return 'principal_message';
  if (raw === 'director-message' || raw === 'directormessage') return 'director_message';
  if (raw === 'pharmaceutical-chemistry' || raw === 'pharmaceuticalchemistry') return 'pharmaceutical_chemistry';
  if (raw === 'pharmacy-practice' || raw === 'pharmacypractice') return 'pharmacy_practice';
  if (raw === 'human-anatomy' || raw === 'humananatomy') return 'human_anatomy';
  if (raw === 'herbal-garden' || raw === 'herbalgarden') return 'herbal_garden';
  if (raw === 'machine-room' || raw === 'machineroom') return 'machine_room';
  if (raw === 'museum-computer-lab' || raw === 'museumcomputerlab' || raw === 'museum' || raw === 'computer-lab') return 'museum_computer_lab';
  if (raw === 'auditorium-sports' || raw === 'auditoriumsports') return 'auditorium_sports';
  const clean = raw.replace(/-/g, '_');
  return clean;
};

/**
 * Helper to get default sections for a site and page.
 * Never returns a 2-section stub. Every page receives a realistic, rich multi-section schema.
 */
function getDefaultSectionsFor(siteKey, pageId) {
  if (siteKey === 'hospital' && DEFAULT_HOSPITAL_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_HOSPITAL_LAYOUTS[pageId]));
  }
  if (siteKey === 'ayurveda' && DEFAULT_AYURVEDA_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_AYURVEDA_LAYOUTS[pageId]));
  }
  if (siteKey === 'iimt' && DEFAULT_IIMT_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_IIMT_LAYOUTS[pageId]));
  }
  if (siteKey === 'legal' && DEFAULT_LEGAL_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_LEGAL_LAYOUTS[pageId]));
  }
  if (siteKey === 'pharmacy' && DEFAULT_PHARMACY_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_PHARMACY_LAYOUTS[pageId]));
  }
  if ((siteKey === 'landing1' || siteKey === 'landingPage1' || siteKey === 'landing-page-1') && DEFAULT_LANDING1_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_LANDING1_LAYOUTS[pageId]));
  }
  if ((siteKey === 'landing2' || siteKey === 'landingPage2' || siteKey === 'landing-page-2') && DEFAULT_LANDING2_LAYOUTS[pageId]) {
    return JSON.parse(JSON.stringify(DEFAULT_LANDING2_LAYOUTS[pageId]));
  }
  // Generic rich default for unlisted subpage
  return [
    { id: 'header', name: 'Page Header', type: 'builtin', order: 0, isHidden: false },
    { id: 'banner_image', name: 'Banner Image', type: 'builtin', order: 1, isHidden: false },
    { id: 'overview', name: 'Page Content & Overview', type: 'builtin', order: 2, isHidden: false },
    { id: 'gallery', name: 'Media Gallery', type: 'builtin', order: 3, isHidden: false },
    { id: 'cta', name: 'Enquiry CTA', type: 'builtin', order: 4, isHidden: false }
  ];
}

/**
 * GET /api/page-layouts/:siteKey/:pageId
 * Public endpoint to fetch layout for a specific page.
 * Unifies with existing GlobalSection (URL-based sections).
 */
router.get('/:siteKey/:pageId', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    const urlPath = PAGE_URL_MAP[pageId] || ('/' + pageId);

    let layout = await PageLayout.findOne({ siteKey, pageId }).lean();
    const defaultSecs = getDefaultSectionsFor(siteKey, pageId);
    let sections = layout?.sections && layout.sections.length > 0 ? [...layout.sections] : defaultSecs;

    // Smart auto-recovery: If saved layout has no builtin sections or only custom sections, merge with defaultSecs
    if (layout && layout.sections && defaultSecs && defaultSecs.length > 0) {
      const hasBuiltins = layout.sections.some(s => s.type === 'builtin');
      if (!hasBuiltins) {
        const customSecs = layout.sections.filter(s => s.type !== 'builtin');
        sections = [...defaultSecs, ...customSecs];
      }
    }

    // Synchronize with URL-based sections in GlobalSection
    try {
      const globalDoc = await GlobalSection.findOne({
        portal: siteKey,
        $or: [{ urlPath }, { urlPath: urlPath.replace(/^\//, '') }]
      }).lean();

      if (globalDoc && Array.isArray(globalDoc.sections) && globalDoc.sections.length > 0) {
        globalDoc.sections.forEach((gSec, idx) => {
          const gHtmlNorm = (gSec.htmlContent || '').replace(/\s+/g, ' ').trim();
          // Check if this global section is already in sections list
          const exists = sections.some(s => {
            if (s.id && (s.id === `url_sec_${idx}` || s.id.startsWith(`url_sec_${idx}_`))) return true;
            if (s.htmlContent) {
              const sHtmlNorm = s.htmlContent.replace(/\s+/g, ' ').trim();
              if (sHtmlNorm === gHtmlNorm) return true;
            }
            return false;
          });

          if (!exists && gSec.htmlContent) {
            sections.push({
              id: `url_sec_${idx}`,
              name: gSec.templateName || `URL-Based Section ${idx + 1}`,
              type: 'custom_html',
              order: sections.length,
              isHidden: false,
              htmlContent: gSec.htmlContent,
              heading: gSec.templateName || ''
            });
          }
        });
      }
    } catch (gErr) {
      console.warn('Error reading GlobalSection for URL sync:', gErr.message);
    }

    // Sort sections by order
    sections.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    // Deduplicate sections to guarantee no section or duplicate HTML is ever returned twice
    const seenIds = new Set();
    const seenHtmls = new Set();
    const dedupedSections = [];

    for (const sec of sections) {
      if (seenIds.has(sec.id)) continue;
      seenIds.add(sec.id);

      if (sec.type === 'custom_html' && sec.htmlContent) {
        const norm = sec.htmlContent.replace(/\s+/g, ' ').trim();
        if (seenHtmls.has(norm)) continue;
        seenHtmls.add(norm);
      }

      dedupedSections.push(sec);
    }

    res.json({
      siteKey,
      pageId,
      urlPath,
      sections: dedupedSections,
      isDefault: !layout
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE /api/page-layouts/:siteKey/:pageId
 * Reset page layout back to default schema
 */
router.delete('/:siteKey/:pageId', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    await PageLayout.findOneAndDelete({ siteKey, pageId });
    res.json({ message: 'Layout successfully reset to default sections', siteKey, pageId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/page-layouts/:siteKey/:pageId/reset
 * Reset page layout back to default schema and return the default sections
 */
router.post('/:siteKey/:pageId/reset', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    await PageLayout.findOneAndDelete({ siteKey, pageId });
    const defaultSections = getDefaultSectionsFor(siteKey, pageId);
    res.json({ message: 'Layout successfully reset to default sections', sections: defaultSections });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/page-layouts/:siteKey
 * Fetch all page layouts for a site.
 */
router.get('/:siteKey', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const layouts = await PageLayout.find({ siteKey }).lean();
    res.json(layouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/page-layouts/:siteKey/:pageId
 * Save or update the entire layout (ordered sections, custom sections, visibility).
 * Automatically synchronizes custom HTML sections with GlobalSection for that page's URL!
 */
router.put('/:siteKey/:pageId', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    let { sections } = req.body;

    if (!Array.isArray(sections)) {
      return res.status(400).json({ error: 'sections array is required' });
    }

    // Re-index order numbers sequentially
    sections = sections.map((sec, idx) => ({
      ...sec,
      order: idx,
      isHidden: Boolean(sec.isHidden)
    }));

    const layout = await PageLayout.findOneAndUpdate(
      { siteKey, pageId },
      { $set: { siteKey, pageId, sections } },
      { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true }
    );

    // Sync custom HTML sections to GlobalSection for this URL path
    const urlPath = PAGE_URL_MAP[pageId] || ('/' + pageId);
    const customHtmlSections = sections
      .filter(s => (s.type === 'custom_html' || s.htmlContent) && !s.isHidden)
      .map(s => ({
        templateName: s.name || s.heading || 'Custom Section',
        htmlContent: s.htmlContent || ''
      }));

    try {
      if (customHtmlSections.length > 0) {
        await GlobalSection.findOneAndUpdate(
          { portal: siteKey, urlPath },
          { $set: { portal: siteKey, urlPath, sections: customHtmlSections } },
          { upsert: true, returnDocument: 'after' }
        );
      } else {
        // If all custom sections were removed or hidden, clear GlobalSection for this path
        await GlobalSection.findOneAndDelete({ portal: siteKey, urlPath });
      }
    } catch (syncErr) {
      console.warn('Error syncing with GlobalSection:', syncErr.message);
    }

    res.json(layout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * POST /api/page-layouts/:siteKey/:pageId/sections
 * Add a single new custom section to a page at a specified position.
 */
router.post('/:siteKey/:pageId/sections', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    const newSection = req.body;

    if (!newSection.name) {
      return res.status(400).json({ error: 'Section name is required' });
    }

    if (!newSection.id) {
      newSection.id = `custom_${Date.now()}`;
    }

    let layout = await PageLayout.findOne({ siteKey, pageId });
    if (!layout) {
      const defaultSections = getDefaultSectionsFor(siteKey, pageId);
      layout = new PageLayout({ siteKey, pageId, sections: defaultSections });
    }

    const insertAt = typeof newSection.order === 'number' ? newSection.order : layout.sections.length;
    layout.sections.splice(insertAt, 0, newSection);

    // Re-index orders
    layout.sections.forEach((sec, idx) => {
      sec.order = idx;
    });

    await layout.save();
    res.status(201).json(layout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * DELETE /api/page-layouts/:siteKey/:pageId/sections/:sectionId
 * Delete a custom section.
 */
router.delete('/:siteKey/:pageId/sections/:sectionId', async (req, res) => {
  try {
    const siteKey = req.params.siteKey;
    const pageId = normalizePageId(req.params.pageId);
    const { sectionId } = req.params;

    const layout = await PageLayout.findOne({ siteKey, pageId });
    if (!layout) {
      return res.status(404).json({ error: 'Layout not found' });
    }

    layout.sections = layout.sections.filter(s => s.id !== sectionId);
    layout.sections.forEach((sec, idx) => {
      sec.order = idx;
    });

    await layout.save();
    res.json(layout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
