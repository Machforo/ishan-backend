require('dotenv').config();
const PageLayout = require('./models/PageLayout');
const mongoose = require('mongoose');

async function clean() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB.');
  
  const allDocs = await PageLayout.find({});
  console.log('Total docs before clean:', allDocs.length);
  
  for (const doc of allDocs) {
    const ids = (doc.sections || []).map(s => s.id);
    // If it has <= 2 sections, delete stale record so it defaults to rich granular schema
    if (ids.length <= 2) {
      console.log(`Deleting stale <=2 section record: ${doc.siteKey} / ${doc.pageId} (${ids.join(', ')})`);
      await PageLayout.deleteOne({ _id: doc._id });
    }
  }

  const remaining = await PageLayout.find({});
  console.log('Remaining docs in page_layouts:');
  for (const r of remaining) {
    console.log(`- ${r.siteKey} / ${r.pageId} (${r.sections.length} sections)`);
  }
  process.exit(0);
}

clean().catch(err => {
  console.error(err);
  process.exit(1);
});
