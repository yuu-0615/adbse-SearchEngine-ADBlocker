const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adRoutes = require('./routes/ads');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));
