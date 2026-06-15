const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const { PharmacyFacility } = require('./models/pharmacyModels');

const facilities = [
  { slug: "/infrastructure", name: "Infrastructure", file: "Infrastructure.tsx" },
  { slug: "/library", name: "Library", file: "Library.tsx" },
  { slug: "/hostel", name: "Hostel Facilities", file: "Hostel.tsx" },
  { slug: "/auditorium-sports", name: "Auditorium & Sports", file: "AuditoriumSports.tsx" }
];

const getTemplate = (slug, title) => `import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, ShieldCheck, MapPin, Star } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const fallbackIcons = [CheckCircle2, ShieldCheck, MapPin, Star];

export default function ${title.replace(/[^a-zA-Z]/g, '')}Page() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "${title}",
    subtitle: "State-of-the-art infrastructure providing an enriching environment for students",
    overviewHeading: "Exceptional Facilities",
    overviewContent: "Ishan Institute of Pharmacy provides world-class infrastructure designed to foster academic excellence and personal growth. Our campus is equipped with modern amenities that cater to the comprehensive needs of our students.\\n\\nFrom advanced study areas to comfortable living spaces, every aspect of our campus has been thoughtfully designed to create a conducive environment for both learning and recreation.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Modern Amenities", description: "Fully equipped with the latest technology and resources." },
      { title: "Safe Campus", description: "24/7 security and a secure environment for all students." },
      { title: "Accessible Location", description: "Strategically located for easy connectivity." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "${slug}") : null;
  const current = pageData || fallback;

  return (
    <Layout>
      <PageHeader
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Facilities" }, { label: "${title}" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed whitespace-pre-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image} alt={current.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {current.highlights.map((h: any, i: number) => {
              const Icon = fallbackIcons[i % fallbackIcons.length];
              return (
                <div key={h.title || i} className={\`reveal delay-\${Math.min(i, 3)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow\`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}`;

async function run() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
  console.log("Connected to DB");

  const frontendDir = path.join(__dirname, '..', 'ishan-pharmacy-vision', 'src', 'pages');

  for (const fac of facilities) {
    const filePath = path.join(frontendDir, fac.file);
    if (fs.existsSync(filePath)) {
      const oldCode = fs.readFileSync(filePath, 'utf8');
      
      let subtitle = "State-of-the-art infrastructure providing an enriching environment for students";
      const subMatch = oldCode.match(/subtitle="([^"]+)"/);
      if (subMatch) subtitle = subMatch[1];

      let overviewHeading = "Exceptional Facilities";
      const headMatch = oldCode.match(/<h2[^>]*>([^<]+)<\/h2>/);
      if (headMatch) overviewHeading = headMatch[1].replace(/\{[^}]+\}/g, "Overview"); // Avoid scraping react vars

      let image = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80";
      const imgMatch = oldCode.match(/<img[^>]*src="([^"]+)"/);
      if (imgMatch && !imgMatch[1].includes("{")) image = imgMatch[1]; // Avoid react vars

      const newCode = getTemplate(fac.slug, fac.name);
      fs.writeFileSync(filePath, newCode, 'utf8');
      console.log(`Updated React component ${fac.file}`);

      const existing = await PharmacyFacility.findOne({ slug: fac.slug });
      if (!existing) {
        await PharmacyFacility.create({
          slug: fac.slug,
          title: fac.name,
          subtitle,
          overviewHeading,
          overviewContent: "Ishan Institute of Pharmacy provides world-class infrastructure designed to foster academic excellence and personal growth. Our campus is equipped with modern amenities that cater to the comprehensive needs of our students.\\n\\nFrom advanced study areas to comfortable living spaces, every aspect of our campus has been thoughtfully designed to create a conducive environment for both learning and recreation.",
          image,
          highlights: [
            { title: "Modern Amenities", description: "Fully equipped with the latest technology and resources." },
            { title: "Safe Campus", description: "24/7 security and a secure environment for all students." },
            { title: "Accessible Location", description: "Strategically located for easy connectivity." }
          ]
        });
        console.log(`Seeded DB for ${fac.slug}`);
      }
    }
  }

  console.log("Finished migrating all Facility pages in parallel!");
  process.exit(0);
}

run().catch(console.error);
