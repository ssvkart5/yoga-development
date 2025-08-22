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

// Connect to MongoDB and set up authentication
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Load environment variables
require('dotenv').config();
