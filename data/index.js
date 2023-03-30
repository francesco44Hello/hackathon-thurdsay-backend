const { Pool } = require("pg");
if (process.env.POSTGRES_CONNECTION_URL === undefined) {
  console.log("POSTGRES_CONNECTION_URL is undefined")
}

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

module.exports = {
    query: function (text, params) {
        return pool.query(text, params);
          },
  pool : pool
};