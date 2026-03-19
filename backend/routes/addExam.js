// Import necessary modules
const express = require('express');
const router = express.Router();

// Route to handle adding a test and questions
module.exports = (db) => {
    router.post('/', async (req, res) => {
        try {
            const { name, questions } = req.body;

            // Insert the test into the tests table
            const newTest = await db.query(
                'INSERT INTO tests (type) VALUES ($1) RETURNING id',
                [name]
            );
            const testId = newTest.rows[0].id;

            // Insert each question into the questions table with the same test ID
            const questionIds = [];
            for (const questionitem of questions) {
                const { question, options, correctAnswer } = questionitem;
                const newQuestion = await db.query(
                    `INSERT INTO questions (test_id, question, answer1, answer2, answer3, answer4, correct_answer)
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
                    [testId, question, options[0], options[1], options[2], options[3], correctAnswer]
                );
                questionIds.push(newQuestion.rows[0].id);
                console.log(question);
            }

            res.status(201).json({ testId, questionIds });
        } catch (err) {
            console.error('Error adding test and questions:', err);
            res.status(500).json({ error: 'Server error' });
        }
    });

    return router;
};
