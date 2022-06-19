const db = require('./db');
const config = require('../config');

async function getMultiple() {
    const rows = await db.query(
        `SELECT * FROM movies WHERE m_rating >= 7`
    );
    const data = rows;

    return { data }
}

async function getSingle(id) {
    const row = await db.query(
        `SELECT * FROM movies WHERE id = ${id}`
    );
    let result = {};
    if(row.length > 0) {
        [result] = row;
    }

    return result;
}

module.exports = {
    getMultiple,
    getSingle
}
