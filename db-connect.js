const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "splagadou",
  password: "toto",
  database: "mini_db",
});

module.exports = pool;
