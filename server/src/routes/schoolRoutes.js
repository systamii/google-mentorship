const express = require('express');
const { getSchools } = require('../models/School');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const schools = await getSchools();
    res.json(schools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
