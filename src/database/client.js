// External database settings + credentials
// These are stored in Codesandbox.io server secrets settings
// If you fork this repo you will need to add your own Elephant SQL access data

const { Pool } = require("pg");

const client = new Pool({
  // Store those values as server secrets (env) on codesandbox
  // see: https://codesandbox.io/docs/secrets
  user: process.env.ELEPHANT_SQL_USER,
  password: process.env.ELEPHANT_SQL_PW,
  host: process.env.ELEPHANT_SQL_HOST,
  database: process.env.ELEPHANT_SQL_DB,
  port: Number(process.env.ELEPHANT_SQL_DB)
});

module.exports = client;
