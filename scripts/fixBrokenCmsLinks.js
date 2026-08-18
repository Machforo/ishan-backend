/**
 * Repairs internal links stored in the CMS that point at paths the websites
 * do not route. Found by cross-checking every href in the navbar/footer/homepage
 * documents against the <Route path=…> declarations in each site's App.tsx.
 *
 * Redirects for these old paths were also added to the frontends, so existing
 * bookmarks keep working; this fixes the source of truth.
 *
 *   node scripts/fixBrokenCmsLinks.js --dry
 *   node scripts/fixBrokenCmsLinks.js
 */
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');

const DRY = process.argv.includes('--dry');

const REWRITES = {
  pharmacy: {
    '/news': '/news-events',
    '/calendar-events': '/events-calendar',
    '/photos': '/photo-gallery',
    '/videos': '/video-gallery',
    '/press': '/press-coverage',
    '/director-message': '/principal-message',
    '/campus-experience': '/infrastructure',
  },
  ayurveda: {
    '/campus': '/infrastructure',
    '/academics': '/departments',
  },
  legal: {
    '/news': '/news-events',
    '/campus-experience': '/infrastructure',
  },
};

const COLLECTIONS = {
  pharmacy: ['pharmacy_navbars', 'pharmacy_footers', 'pharmacy_homepages'],
  ayurveda: ['ayurveda_siteconfig', 'ayurveda_homepages'],
  legal: ['legal_navbars', 'legal_footers', 'legal_homepages'],
};

const LINK_KEYS = new Set(['href', 'link', 'url', 'ctaLink', 'cta2Link']);

function rewrite(node, map, changes, path = '') {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) {
    node.forEach((v, i) => rewrite(v, map, changes, `${path}[${i}]`));
    return node;
  }
  for (const [k, v] of Object.entries(node)) {
    if (LINK_KEYS.has(k) && typeof v === 'string' && map[v]) {
      changes.push(`${path}.${k}: ${v} -> ${map[v]}`);
      node[k] = map[v];
    } else {
      rewrite(v, map, changes, `${path}.${k}`);
    }
  }
  return node;
}

(async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms', { serverSelectionTimeoutMS: 20000 });
  const db = mongoose.connection.db;
  let total = 0;

  for (const [site, map] of Object.entries(REWRITES)) {
    for (const collName of COLLECTIONS[site]) {
      const coll = db.collection(collName);
      const docs = await coll.find({}).toArray();
      for (const doc of docs) {
        const changes = [];
        const { _id, ...rest } = doc;
        rewrite(rest, map, changes, collName);
        if (changes.length === 0) continue;
        total += changes.length;
        console.log(`\n${collName} (${_id})`);
        changes.forEach((c) => console.log('  ' + c));
        if (!DRY) await coll.updateOne({ _id }, { $set: rest });
      }
    }
  }

  console.log(`\n${DRY ? '[dry run] ' : ''}${total} link(s) ${DRY ? 'would be' : ''} rewritten.`);
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
