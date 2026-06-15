const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { PharmacyStudentPortal, PharmacyFeePayment } = require('./models/pharmacyModels');

const frontendDir = path.join(__dirname, '..', 'ishan-pharmacy-vision', 'src', 'pages');

async function processPortal() {
  const file = "StudentPortal.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = {
    title: "Student Portal",
    instructions: "Current Ishan Pharmacy students can access their academic profiles, attendance records, and library resources through the unified student portal. University examination results are available via the CCS University portal.",
    link: "",
    image: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg"
  };

  const existing = await PharmacyStudentPortal.findOne();
  if (!existing) {
    await PharmacyStudentPortal.create(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("studentportal"\);/, 'const { data } = usePharmacyData("studentportal");');
  code = code.replace(/const content = data\?\.content;/, 'const content = data || {};');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function processFee() {
  const file = "FeePayment.tsx";
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;

  const docData = {
    title: "Fee Payment",
    instructions: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Pharmacy as your institution, choose your program (D.Pharm / B.Pharm), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
    link: "https://fee.ishan.ac"
  };

  const existing = await PharmacyFeePayment.findOne();
  if (!existing) {
    await PharmacyFeePayment.create(docData);
    console.log(`Seeded DB for ${file}`);
  }

  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/import { useIshanLawData } from "@\/hooks\/useIshanLawData";/, 'import { usePharmacyData } from "@/hooks/usePharmacyData";');
  code = code.replace(/const { data } = useIshanLawData\("feepayment"\);/, 'const { data } = usePharmacyData("feepayment");');
  code = code.replace(/const content = data\?\.content;/, 'const content = data || {};');
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated React component ${file}`);
}

async function run() {
  require('dotenv').config();
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
  console.log("Connected to DB");

  await processPortal();
  await processFee();

  console.log("Finished refactoring portals!");
  process.exit(0);
}

run().catch(console.error);
