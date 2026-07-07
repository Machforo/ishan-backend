const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const navLinks = [
  {
    label: 'About Us',
    featured: {
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      title: '30 Years of Excellence',
      desc: 'Pioneering professional education in Knowledge Park, Greater Noida since 1994.',
      href: '/about',
    },
    columns: [
      {
        heading: 'Institution',
        icon: 'Building2',
        links: [
          { label: 'About IIMT', href: '/about' },
          { label: 'Director\'s Message', href: '/director-message' },
          { label: 'Mission & Vision', href: '/mission-vision' },
          { label: 'Why Choose Us', href: '/why-iimt' },
          { label: 'Best Practices', href: '/best-practices' },
          { label: 'Green Initiatives', href: '/green-initiatives' },
          { label: 'Approvals & Affiliations', href: '/approvals' },
          { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
        ],
      },
      {
        heading: 'Faculty',
        icon: 'Users',
        links: [
          { label: 'Faculty Directory', href: '/faculty' },
          { label: 'Visiting Faculty', href: '/visiting-faculty' },
          { label: 'Research Journal', href: '/research-journal' },
          { label: 'FAQs', href: '/faqs' },
        ],
      },
      {
        heading: 'Placements',
        icon: 'Award',
        links: [
          { label: 'Placement Overview', href: '/placements' },
          { label: 'Placement Testimonials', href: '/placements#testimonials' },
          { label: 'Alumni Network', href: '/e-cell#alumni' },
          { label: 'Entrepreneurship Cell', href: '/e-cell' },
        ],
      },
    ],
  },
  {
    label: 'Academics',
    featured: {
      img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      title: '6 Professional Programmes',
      desc: 'Undergraduate & postgraduate courses in Management, Commerce, IT and Teacher Education.',
      href: '/education-overview',
    },
    columns: [
      {
        heading: 'Management & Commerce',
        icon: 'BookOpen',
        links: [
          { label: 'BBA', href: '/courses/bba' },
          { label: 'B.Com', href: '/courses/bcom' },
          { label: 'M.Com', href: '/courses/mcom' },
        ],
      },
      {
        heading: 'Technology',
        icon: 'Microscope',
        links: [
          { label: 'BCA', href: '/courses/bca' },
        ],
      },
      {
        heading: 'Education',
        icon: 'GraduationCap',
        links: [
          { label: 'Education Overview', href: '/education-overview' },
          { label: 'B.Ed', href: '/courses/bed' },
          { label: 'M.Ed', href: '/courses/med' },
          { label: 'Pedagogy Labs', href: '/pedagogy-labs' },
        ],
      },
      {
        heading: 'Admissions',
        icon: 'ArrowRight',
        links: [
          { label: 'Admissions 2025-26', href: '/admissions' },
          { label: 'Admissions Enquiry', href: '/admissions-enquiry' },
          { label: 'Scholarships', href: '/scholarships' },
          { label: 'Certificate Programs', href: '/certificate-programs' },
        ],
      },
    ],
  },
  {
    label: 'Campus Life',
    featured: {
      img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80',
      title: 'Vibrant Campus Experience',
      desc: 'State-of-the-art facilities, cultural festivals, and endless opportunities to grow.',
      href: '/infrastructure',
    },
    columns: [
      {
        heading: 'Learning & Activities',
        icon: 'BookOpen',
        links: [
          { label: 'News & Events', href: '/news-events' },
          { label: 'Events Calendar', href: '/events-calendar' },
          { label: 'Skill Development', href: '/skill-development' },
          { label: 'Cultural & Kshitiz', href: '/cultural-activities' },
          { label: 'Debates & GD', href: '/debates-gd' },
          { label: 'Industrial Visits', href: '/industrial-visits' },
          { label: 'Guest Lectures', href: '/guest-lectures' },
        ],
      },
      {
        heading: 'Campus Facilities',
        icon: 'Building2',
        links: [
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'IT Lab', href: '/it-lab' },
          { label: 'Library', href: '/library' },
          { label: 'Auditorium', href: '/auditorium' },
          { label: 'Hostel', href: '/hostel' },
          { label: 'Sports', href: '/sports' },
        ],
      },
      {
        heading: 'Gallery & Media',
        icon: 'Camera',
        links: [
          { label: 'Photo Gallery', href: '/photo-gallery' },
          { label: 'Video Gallery', href: '/video-gallery' },
          { label: 'Press Coverage', href: '/press-coverage' },
        ],
      },
    ],
  },
  {
    label: 'Student Zone',
    featured: {
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      title: 'Everything You Need',
      desc: 'Your one-stop hub for academic resources, portals, policies and student welfare.',
      href: '/student-portal',
    },
    columns: [
      {
        heading: 'Resources',
        icon: 'FileText',
        links: [
          { label: 'Downloads', href: '/downloads' },
          { label: 'Past Exam Papers', href: '/past-papers' },
          { label: 'Fee Payment', href: '/fee-payment' },
          { label: 'Student Portal', href: '/student-portal' },
        ],
      },
      {
        heading: 'Policies & Welfare',
        icon: 'Shield',
        links: [
          { label: 'Code of Conduct', href: '/code-of-conduct' },
          { label: 'Anti-Ragging', href: '/anti-ragging' },
          { label: 'Grievance Redressal', href: '/grievance-redressal' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
      },
    ],
    extraImgs: [
      { img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80', caption: 'Library & Resources', href: '/library' },
      { img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80', caption: 'Campus Examinations', href: '/past-papers' },
    ],
  },
  {
    label: 'Contact',
    featured: {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      title: 'We\'re Here to Help',
      desc: 'Reach out to our admissions team, explore career opportunities, or share your feedback.',
      href: '/contact',
    },
    columns: [
      {
        heading: 'Get in Touch',
        icon: 'MessageSquare',
        links: [
          { label: 'Contact Us', href: '/contact' },
          { label: 'Admissions Enquiry', href: '/admissions-enquiry' },
          { label: 'Feedback', href: '/feedback' },
        ],
      },
      {
        heading: 'Work With Us',
        icon: 'Briefcase',
        links: [
          { label: 'Careers at IIMT', href: '/careers' },
        ],
      },
    ],
    extraImgs: [
      { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80', caption: 'Knowledge Park Campus', href: '/contact' },
      { img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&q=80', caption: 'Admissions Helpdesk', href: '/admissions-enquiry' },
    ],
  },
];

async function seedHeader() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
    console.log('Connected to DB');

    const db = mongoose.connection.db;
    const iimt_homepages = db.collection('iimt_homepages');
    
    const doc = await iimt_homepages.findOne({});
    if (!doc) {
      console.log('No homepage doc found, creating one...');
      await iimt_homepages.insertOne({
        header: {
          phone: '+91 8448797700',
          email: 'info@ishan.ac',
          logoText: 'ISHAN',
          logoSubtext: 'Institute of Management & Technology',
          navLinks: navLinks
        }
      });
    } else {
      console.log('Updating existing homepage doc with header data...');
      await iimt_homepages.updateOne({}, {
        $set: {
          header: {
            phone: '+91 8448797700',
            email: 'info@ishan.ac',
            logoText: 'ISHAN',
            logoSubtext: 'Institute of Management & Technology',
            navLinks: navLinks
          }
        }
      });
    }
    console.log('Header data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedHeader();
