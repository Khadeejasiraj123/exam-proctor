const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // Function to check if email exists in the database
    const checkEmailExistence = function (email) {
        return db
            .query("SELECT * FROM users WHERE email = $1", [email])
            .then((result) => {
                // If the email exists, return true
                return result.rows.length > 0;
            })
            .catch((error) => {
                console.error("Error checking email existence:", error);
                return false;
            });
    };

    router.post("/", function (req, res) {
        const { email } = req.body;

        checkEmailExistence(email)
            .then((isValid) => {
                res.json({ isValid });
            })
            .catch((error) => {
                console.error("Error in forgot password endpoint:", error);
                res.status(500).json({ error: "Internal server error" });
            });
    });

    return router;
};
