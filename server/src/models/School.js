const pool = require('../db');

const getSchools = async () => {
    const result = await pool.query('SELECT * FROM schools');
    return result.rows;
}

module.exports = { getSchools };