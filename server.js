const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Keep either 8080 or 3000, not both

// Serve static files
app.use(express.static('public'));

// Serve routes for yoga app
app.use('/classes', require('./routes/classes'));
app.use('/poses', require('./routes/poses'));
app.use('/schedule', require('./routes/schedule'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Yoga site running on port ${PORT}`);
});
