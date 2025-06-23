const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/restaurant-detail', async (req, res) => {
  try {
    const response = await fetch('https://testapp.gokidogo.com/webapi/api.php/restaurentdetail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    const data = JSON.parse(text);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Invalid JSON from Gokidogo', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});