const express = require("express");
const router = express.Router();

module.exports = (db) => {
    router.get("/:id", (req, res) => {
        const { id } = req.params
        db.query(
            `delete from users where id = ${id}; `
        ).then(() => res.send({ status: true }));
    });
    return router;
};
