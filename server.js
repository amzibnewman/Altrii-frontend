const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Explicitly serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  });
});

// Serve any other static files
app.use(express.static(__dirname));

// Handle all other routes (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
