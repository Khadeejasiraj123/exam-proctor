const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", function (req, res, next) {
    db.query(`SELECT * FROM tests;`)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((e) => console.log(e));
  });

  router.post("/", async function (req, res) {
    const info = req.body;
    const utcDateString = info.start_date
    const utcDate = new Date(utcDateString);

    // Convert to India Kolkata time zone (IST, UTC+5:30)
    const istDate = new Date(utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    console.log("time is", istDate.toISOString()); // Output: 2024-02-21T00:00:00.000Z

    console.log("type India is", typeof (info.start_date))
    console.log("type is", typeof (info.start_date))
    const proctorList = await db.query("Select * from users where role = 'proctor'")
    console.log("proctor list is", proctorList.rows[0].id);



    db.query(
      `INSERT INTO appointments (
          student_id, 
          proctor_id,
          test_id,
          start_date) VALUES ($1,$2,$3,$4) returning * `,
      [info.student_id, proctorList.rows[0].id, info.test_id, istDate.toDateString()]
    )
      .then((appointment) => {
        return res.json(appointment);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return router;
};
