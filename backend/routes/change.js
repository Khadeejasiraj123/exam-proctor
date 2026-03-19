const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (db) => {
    // Function to retrieve user by email
    const getUserByEmail = function (email) {
        return db
            .query("SELECT * FROM users WHERE email = $1", [email])
            .then((result) => {
                return result.rows[0]; // Assuming there's only one user with this email
            })
            .catch((error) => {
                console.error("Error getting user by email:", error);
                return null;
            });
    };

    // Function to update user's password
    const updatePassword = function (userId, newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(newPassword, salt);
        return db
            .query("UPDATE users SET password = $1 WHERE id = $2", [hashedPassword, userId])
            .then(() => true)
            .catch((error) => {
                console.error("Error updating password:", error);
                return false;
            });
    };

    // Router endpoint to handle password change
    router.post("/", async (req, res) => {
        const { email, newPassword } = req.body;

        try {
            // Retrieve user by email
            const user = await getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Update user's password
            const updated = await updatePassword(user.id, newPassword);
            if (!updated) {
                return res.status(500).json({ error: "Failed to update password" });
            }

            // Password updated successfully
            res.json({ message: "Password updated successfully" });
        } catch (error) {
            console.error("Error in password change endpoint:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
};
