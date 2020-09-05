const mysql = require("mysql2");

async function createConnection() {
  const connection = await mysql.createConnection({
    database: "igor_salvus",
    port: 3306,
    host: "db4free.net",
    user: "igor_salvus",
    password: "igor_salvus",
  });
  return connection;
}

module.exports = {
  createConnection,
};
