const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

const expenseRoutes = require('./routes/expenseRoutes');

// Expense routes
app.use('/api/expenses', expenseRoutes);

// Authentication routes
app.use('/api/auth', authRoutes);

app.get('/test', (req, res) => {
    res.status(200).json({ message: "API is working!" });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000,})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
