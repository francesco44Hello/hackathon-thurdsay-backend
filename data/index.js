import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

module.exports = {
    query: function (text, params) {
        return pool.query(text, params);
          },
  pool : pool
};