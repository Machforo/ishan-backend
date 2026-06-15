const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// We use the already-defined models from pharmacyModels
const { PharmacyDownload, PharmacyPastPaper, PharmacyGuestLecture, PharmacyIndustrialVisit } = require('./models/pharmacyModels');

const frontendDir = path.join(__dirname, '..', 'ishan-pharmacy-vision', 'src', 'pages');

async function processDownloads(file, model, pageTitle, titleText, subtitleText, endpointName) {
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = {
    title: titleText,
    subtitle: subtitleText,
    overview: "Access mandatory forms, academic calendars, and syllabus documents. All documents are in PDF format for easy accessibility across devices.",
    image: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg",
    files: [
      { name: "D.Pharm Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "2.4 MB" },
      { name: "B.Pharm Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "1.8 MB" },
      { name: "Academic Calendar 2024-25", fileType: "PDF", category: "Calendar", size: "850 KB" }
    ]
  };

  const existing = await model.findOne();
  if (!existing) {
    await model.create(docData);
    console.log(`Seeded DB for ${file}`);
  }

  const newCode = `import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export default function ${pageTitle}() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("${endpointName}");
  const current = data || {
    title: "${titleText}",
    subtitle: "${subtitleText}",
    overview: "Access mandatory documents.",
    image: "",
    files: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: "Students" }, { label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-8">
              <div className="text-foreground/70 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: current.overview }} />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image} alt="Resources" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-3">
            {(current.files || []).map((d: any, i: number) => (
              <div key={d.name || i} className={\`reveal delay-\${Math.min(i % 4, 3)}00 flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow\`}>
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-destructive" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground truncate">{d.name}</h3>
                  <p className="text-xs text-muted-foreground">{d.category} · {d.fileType} · {d.size}</p>
                </div>
                <button className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"><Download className="w-4 h-4" /></button>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}`;

  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processLectures() {
  const file = "GuestLectures.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = {
    title: "Guest Lectures & Seminars",
    subtitle: "Insights from prominent professionals, academics, and industry leaders.",
    overviewHeading: "Engaging with Industry Pioneers",
    overviewContent: 'Ishan Institute of Pharmacy hosts prominent professionals, academics, and industry leaders through guest lectures, national seminars, and conferences. Students gain insights beyond the classroom on topics ranging from finance and marketing to technology and entrepreneurship. These sessions bridge the gap between academic theory and the rapidly evolving industrial landscape.\\n\\n<div class="bg-muted/50 p-6 rounded-2xl border border-border/50 mt-6"><div class="space-y-1"><p class="text-sm font-bold text-foreground">What to Expect</p><p class="text-xs leading-relaxed">Sessions are open to all students across programmes. Topics and schedules are posted in advance on the Events Calendar.</p></div></div>',
    events: [
      { speaker: "Dr. Arvind Kumar", designation: "Senior Economist", topic: "Monetary Policy", date: "Oct 15, 2023", takeaways: "Deep dive into inflation targeting." },
      { speaker: "Ms. Neha Sharma", designation: "Marketing Head", topic: "Digital First Branding", date: "Sep 22, 2023", takeaways: "Hyper-local marketing and brand loyalty." }
    ]
  };

  const existing = await PharmacyGuestLecture.findOne();
  if (!existing) {
    await PharmacyGuestLecture.create(docData);
    console.log(`Seeded DB for ${file}`);
  }

  const newCode = `import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic2, Calendar } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export default function GuestLecturesPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("guestlectures");
  const current = data || {
    title: "Guest Lectures & Seminars",
    subtitle: "",
    overviewHeading: "",
    overviewContent: "",
    events: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Beyond Textbooks</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />
            </div>
            <div className="reveal-right space-y-4">
              {(current.events || []).map((e: any, i: number) => (
                <div key={i} className="group p-6 rounded-2xl border bg-card hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <Mic2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{e.speaker}</h4>
                      <p className="text-xs text-foreground/50">{e.designation}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-bold text-navy leading-tight">{e.topic}</h5>
                    <p className="text-xs leading-relaxed italic">"{e.takeaways}"</p>
                    <div className="flex items-center gap-2 pt-2 text-xs font-bold text-gold uppercase tracking-widest">
                      <Calendar className="w-3 h-3" /><span>{e.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}`;

  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processVisits() {
  const file = "IndustrialVisits.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = {
    title: "Industrial Visits",
    subtitle: "Bridging the gap between classroom theory and real-world industrial practices.",
    overviewHeading: "Learning Beyond the Classroom",
    overviewContent: "At Ishan Institute of Pharmacy, industrial visits are a mandatory and integral part of the curriculum. These visits provide students with exposure to real-world pharmaceutical manufacturing, quality control, packaging, and R&D processes.\\n\\nStudents get the opportunity to interact with industry experts, understand GMP (Good Manufacturing Practices), and observe large-scale machinery in action.",
    visits: [
      { company: "Sun Pharma Advanced Research", location: "Gurugram, Haryana", date: "Nov 12, 2023", description: "Explored advanced drug delivery systems and quality assurance protocols.", takeaways: "Insight into Phase II clinical trial data management." },
      { company: "Dabur India Ltd. (Ayurvedic Division)", location: "Ghaziabad, UP", date: "Sep 05, 2023", description: "Learned about traditional extraction methods combined with modern quality control.", takeaways: "Standardization of herbal raw materials." }
    ]
  };

  const existing = await PharmacyIndustrialVisit.findOne();
  if (!existing) {
    await PharmacyIndustrialVisit.create(docData);
    console.log(`Seeded DB for ${file}`);
  }

  const newCode = `import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, MapPin, Calendar, ArrowRight } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export default function IndustrialVisitsPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("industrialvisits");
  const current = data || {
    title: "Industrial Visits",
    subtitle: "",
    overviewHeading: "",
    overviewContent: "",
    visits: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Industry Connect</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Industrial Visit" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="reveal font-bold text-2xl text-center mb-10">Recent Visits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {(current.visits || []).map((v: any, i: number) => (
                <div key={i} className={\`reveal delay-\${Math.min(i % 4, 3)}00 p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 group\`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{v.company}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/60">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {v.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {v.date}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5 text-navy" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{v.description}</p>
                  <div className="bg-muted p-4 rounded-xl border border-border/50">
                    <p className="text-xs font-bold text-navy mb-1 uppercase tracking-wider">Key Takeaway</p>
                    <p className="text-sm italic">"{v.takeaways}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}`;

  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function run() {
  require('dotenv').config();
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
  console.log("Connected to DB");

  await processDownloads("Downloads.tsx", PharmacyDownload, "DownloadsPage", "Downloads", "Timetables, syllabi, forms, and notices for current students", "downloads");
  await processDownloads("PastPapers.tsx", PharmacyPastPaper, "PastPapersPage", "Past Exam Papers", "Previous year question papers for B.Pharm and D.Pharm", "pastpapers");
  await processLectures();
  await processVisits();

  console.log("Finished refactoring all 4 pages!");
  process.exit(0);
}

run().catch(console.error);
