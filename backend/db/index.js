const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log("✅ Render DB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

module.exports = client;