const fs = require("fs");
const path = require("path");
const db = require("./db");

async function init() {
  try {
    const sql = fs.readFileSync(
      path.join(__dirname, "db/schema/all.sql"),
      "utf-8"
    );

    await db.query(sql);

    console.log("✅ All tables created successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating tables:", err);
    process.exit(1);
  }
}

init();