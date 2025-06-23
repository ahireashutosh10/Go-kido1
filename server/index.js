const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/restaurant-detail', async (req, res) => {
  try {
    console.log('📥 Incoming request body:', req.body);

    const response = await fetch('https://testapp.gokidogo.com/webapi/api.php/restaurentdetail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      res.json(json);
    } catch {
      res.status(500).json({ error: 'Invalid JSON from API', raw: text });
    }
  } catch (err) {
    console.error('❌ Proxy Error:', err.message);
    res.status(500).json({ error: 'Proxy failed', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
