const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

/* access all login  */
module.exports = (db) => {
  const registerNewUser = function (
    first_name,
    last_name,
    email,
    role,
    password,
    proof
  ) {
    //function start

    const salt = bcrypt.genSaltSync(10);
    const hashPW = function (userPW) {
      return bcrypt.hashSync(userPW, salt);
    };

    return db
      .query(
        `INSERT INTO users (first_name,
                           last_name, 
                            email, 
                              role, 
                              password,proof) VALUES ($1,$2,$3,$4,$5,$6) returning *  `,
        [
          first_name,
          last_name,
          email.toLowerCase(),
          role,
          hashPW(password),
          proof
        ]
      )
      .then((user) => {
        console.log(user);
        if (!user) {
          console.log(`insert error ${error}!`);
          return;
        }
        return user;
      })
      .catch((e) => console.log(e));
  };
  exports.registerNewUser = registerNewUser;

  router.post("/", function (req, res) {
    const info = req.body;

    registerNewUser(
      info.first_name,
      info.last_name,
      info.email,
      info.role,
      info.password,
      info.proof
    ).then((result) => {
      res.send({ status: true });
    });
  });

  return router;
};
