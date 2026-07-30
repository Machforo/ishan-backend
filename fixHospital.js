const mongoose = require('mongoose');
require('dotenv').config();
const { AyurvedaHospital } = require('./models/ayurvedaModels');

const targetImage = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80';

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  await mongoose.connection.collection('ayurvedahospitals').updateOne({}, {
    $set: {
      'panchkarma': {
        description: 'Traditional Panchkarma therapies.',
        image: targetImage,
        therapies: [
          { name: 'Vamana', description: 'Therapeutic emesis' },
          { name: 'Virechana', description: 'Therapeutic purgation' }
        ]
      },
      'overview.image': targetImage
    }
  });

  console.log('Seeded Ayurveda Hospital images via direct update');
  process.exit(0);
}
seed();
