var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const myPrivateKey = process.env.PRIVKEY;
require("dotenv").config();

module.exports = (db) => {
  router.get("/", function (req, res) {
    res.send("TESTTESTESTRST");
  });

  const getUserWithEmail = function (email) {
    console.log("getUserWithEmail", email);
    return db.query(`SELECT * FROM users WHERE email = $1`, [email.toLowerCase()]).then((result) => {
      console.log("get user result", result);
      return result.rows[0];
    })
      .catch((err) => {
        return null;
      });
  };
  exports.getUserWithEmail = getUserWithEmail;

  const login = function (candidateEmail, candidatePassword) {
    return getUserWithEmail(candidateEmail).then((user) => {
      if (!user) {
        return null;
      }
      if (bcrypt.compareSync(candidatePassword, user.password)) {
        return user;
      }
    });
  };
  exports.login = login;

  router.post("/", function (req, res) {
    const { email, password } = req.body;

    console.log(req.body);
    try {
      login(email, password).then((user) => {
        console.log("=====================", email);
        console.log("user is", !user)
        // if not find the user
        if (!user) {
          return res.status(400).json({ message: "username or password incorrect" });
        }
        // if find the user, generate access token
        const accessToken = jwt.sign(
          {
            id: user.id,
            role: user.role,
          },
          myPrivateKey,
          { expiresIn: "2h" }
        );
        // grab information
        console.log("=====================", accessToken);

        return res.json({
          id: user.id,
          first_name: user.first_name,
          role: user.role,
          accessToken,
          message: "Login sucessful"
        });
      });

    } catch (error) {
      res.status(500).json({ message: "Server error Please check your internet connection and try again" })
    }
  });

  return router;
};
