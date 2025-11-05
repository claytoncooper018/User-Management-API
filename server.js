const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(morgan('dev'));  // Logging middleware
app.use(cors());         // Allow cross-origin requests

// ✅ Routes
app.use('/api/users', userRoutes);

// ✅ Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));