require('dotenv').config(); // Load environment variables

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/classes', require('./routes/classes'));
app.use('/poses', require('./routes/poses'));
app.use('/schedule', require('./routes/schedule'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check route (optional)
app.get('/status', (req, res) => {
  res.send('🧘‍♂️ Yoga server is up and running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Yoga site running on port ${PORT}`);
});
