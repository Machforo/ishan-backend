(async () => {
  try {
    const res = await fetch('http://localhost:5000/api/ayurveda/facilities');
    const data = await res.json();
    console.log("Facilities Data keys:", Object.keys(data));
    console.log("Infrastructure exists?", !!data.infrastructure);
    console.log("Herbal garden exists?", !!data.herbalGarden);
    
    const photosRes = await fetch('http://localhost:5000/api/ayurveda/photo-gallery');
    const photosData = await photosRes.json();
    console.log("Photo Gallery items:", photosData.length);
  } catch (e) {
    console.error(e);
  }
})();
