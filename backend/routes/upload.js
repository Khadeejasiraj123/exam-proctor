const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');




module.exports = (db) => {


    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Set the destination folder for uploaded files
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname)); // Set the filename to be unique
        },
    });

    const upload = multer({ storage: storage });

    // Define the "/uploads" route for handling file uploads
    router.post("/", upload.single('file'), (req, res) => {
        const filename = req.file ? req.file.filename : null;
        // Do whatever you need with the uploaded file, e.g., store the filename in the database

        res.json({ status: true, filename });
    });

    return router
}
// Configure multer to handle file uploads

