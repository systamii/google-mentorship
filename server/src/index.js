require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const schoolRoutes = require('./routes/schoolRoutes');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.json());

// Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/locations', locationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
