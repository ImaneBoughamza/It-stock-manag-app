const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// ✅ Fix this to match your file: routes/auth.js
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// 🔌 Connect to MongoDB
connectDB();

// 🔐 Middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions)); // Fixes CORS
app.use(express.json()); // Parse JSON bodies

// 📦 Routes
app.use('/api/auth', authRoutes); // All auth routes (login, signup, etc.)

// 🧪 Sample test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
