const axios = require('axios');

async function test() {
  try {
    const res = await axios.put('http://localhost:5000/api/pharmacy/admissions', {
      howToApply: [{ num: "1", title: "Test", desc: "Test" }]
    }, {
      // no auth? wait, authMiddleware requires a token!
    });
    console.log(res.data);
  } catch (e) {
    console.error(e.response ? e.response.status + " " + e.response.data.message : e.message);
  }
}
test();
