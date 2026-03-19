const express = require("express");
const router = express.Router();


module.exports = (db) => {

    router.get("/:id", async function (req, res, next) {

        const { id } = req.params


        await db.query(`Select * from appointments where student_id=${id}`).then((result) => {

            res.status(200).json({ data: result.rows });


        }).catch((error) => {
            console.error("Error :", error);
            res.status(200).json({ data: result.rows });

            return false;

        });


    })



    return router




}