const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { PharmacyCalendarEvent, PharmacyPhoto, PharmacyVideo, PharmacyPress } = require('./models/pharmacyModels');
const frontendDir = path.join(__dirname, '..', 'ishan-pharmacy-vision', 'src', 'pages');

async function processCalendar() {
  const file = "EventsCalendar.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = [
    { name: "National Seminar on Digital Business", date: "May 15, 2024", venue: "Main Auditorium", category: "Academic", description: "A comprehensive seminar on how digital transformation is reshaping traditional business models." },
    { name: "Kshitiz 2024: Annual Cultural Fest", date: "June 05-07, 2024", venue: "Campus Grounds", category: "Cultural", description: "Our flagship cultural festival featuring music, dance, and arts from across the region." },
    { name: "Mega Placement Drive", date: "May 20, 2024", venue: "Placement Cell", category: "Placement", description: "Annual recruitment event with 30+ corporate partners participating." }
  ];

  const count = await PharmacyCalendarEvent.countDocuments();
  if (count === 0) {
    await PharmacyCalendarEvent.insertMany(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/const events = \[[\s\S]*?\];/, '');
  code = code.replace(/import { Calendar, MapPin, Tag, Clock, Share2 } from "lucide-react";/, 'import { Calendar, MapPin, Tag, Clock, Share2 } from "lucide-react";\nimport { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const ref = useScrollReveal\(\);/, 'const ref = useScrollReveal();\n  const { data: eventsData } = usePharmacyData("calendarevents");\n  const events = eventsData?.length > 0 ? eventsData : [];');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processPhotos() {
  const file = "PhotoGallery.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = [
    { title: "Pharmacy Lab Session", category: "Pharmacy Labs", url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69" }
  ];

  const count = await PharmacyPhoto.countDocuments();
  if (count === 0) {
    await PharmacyPhoto.insertMany(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("gallery"\);/, 'const { data: photosData } = usePharmacyData("photos");');
  code = code.replace(/const photos: Array<{title:string;url:string;category\?:string}> = data\?\.photos\?\.length > 0 \? data\.photos : \[\];/, 'const photos: Array<{title:string;url:string;category?:string}> = photosData?.length > 0 ? photosData : [];');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processVideos() {
  const file = "VideoGallery.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = [
    { title: "Campus Tour", category: "Campus", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  ];

  const count = await PharmacyVideo.countDocuments();
  if (count === 0) {
    await PharmacyVideo.insertMany(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("gallery"\);/, 'const { data: videosData } = usePharmacyData("videos");');
  code = code.replace(/const videos = data\?\.videos\?\.length > 0 \? data\.videos\.map/, 'const videos = videosData?.length > 0 ? videosData.map');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processPress() {
  const file = "PressCoverage.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = [
    { publication: "Times of India", date: "15 March 2026", headline: "Ishan Institute of Pharmacy students excel", tag: "Print" }
  ];

  const count = await PharmacyPress.countDocuments();
  if (count === 0) {
    await PharmacyPress.insertMany(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("gallery"\);/, 'const { data: pressData } = usePharmacyData("press");');
  code = code.replace(/const pressItems = data\?\.pressCoverage\?\.length > 0 \? data\.pressCoverage\.map/, 'const pressItems = pressData?.length > 0 ? pressData.map');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processNews() {
  const file = "NewsEvents.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("newsevent"\);/, 'const { data: newsData } = usePharmacyData("news");');
  code = code.replace(/const events = data\?\.events\?\.length > 0 \n    \? data\.events\.map/, 'const events = newsData?.length > 0 \n    ? newsData.map');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function run() {
  require('dotenv').config();
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
  console.log("Connected to DB");

  await processCalendar();
  await processPhotos();
  await processVideos();
  await processPress();
  await processNews();

  console.log("Finished refactoring Gallery & Events pages!");
  process.exit(0);
}

run().catch(console.error);
