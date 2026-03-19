import React, { useState } from 'react';
import axios from 'axios';
import './AddExam.scss';
import { useNavigate } from "react-router-dom"

function AddExam() {
    const [examData, setExamData] = useState({
        name: '',
        questions: [{ question: '', options: ['', '', '', ''], correctAnswer: '' }],
    });
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExamData({ ...examData, [name]: value });
    };

    const handleQuestionChange = (e, index) => {
        const questions = [...examData.questions];
        questions[index] = { ...questions[index], question: e.target.value };
        setExamData({ ...examData, questions });
    };

    const handleOptionChange = (e, questionIndex, optionIndex) => {
        const questions = [...examData.questions];
        questions[questionIndex].options[optionIndex] = e.target.value;
        setExamData({ ...examData, questions });
    };

    const handleCorrectAnswerChange = (e, questionIndex) => {
        const questions = [...examData.questions];
        questions[questionIndex].correctAnswer = e.target.value;
        setExamData({ ...examData, questions });
    };

    const handleAddQuestion = () => {
        setExamData({ ...examData, questions: [...examData.questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any options are similar
        const hasSimilarOptions = examData.questions.some((question) => {
            const uniqueOptions = new Set(question.options.filter((option) => option.trim() !== ''));
            return uniqueOptions.size !== question.options.filter((option) => option.trim() !== '').length;
        });
        if (hasSimilarOptions) {
            setErrorMessage('Error: Each option in a question must be unique.');
            return;
        } else {
            setErrorMessage('');
        }
        try {
            const res = await axios.post('/addExam', examData); // Send exam data to backend
            console.log(res.data); // Log the response from the backend
            alert("sucessfully uploaded")
            navigate("/proctor")
            // Optionally: Redirect to a success page or show a success message to the user
        } catch (error) {
            console.error('Error adding exam:', error);
            // Optionally: Show an error message to the user
        }
    };

    return (
        <div className="add-exam-container">
            <div className="add-exam">
                <h2>Add Exam</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Exam Name:
                        <input type="text" name="name" value={examData.name} onChange={handleInputChange} required />
                    </label>
                    <h3>Questions:</h3>
                    {examData.questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="question-container">
                            <label>
                                Question {questionIndex + 1}:
                                <input
                                    type="text"
                                    value={question.question}
                                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                                    required
                                />
                            </label>
                            <div className="options">
                                {question.options.map((option, optionIndex) => (
                                    <label key={optionIndex}>
                                        Option {optionIndex + 1}:
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                                            required
                                        />
                                    </label>
                                ))}
                            </div>
                            <label>
                                Correct Answer:
                                <select
                                    value={question.correctAnswer}
                                    onChange={(e) => handleCorrectAnswerChange(e, questionIndex)}
                                    required
                                >
                                    <option value="">Select Correct Answer</option>
                                    {question.options.map((option, optionIndex) => (
                                        <option key={optionIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    ))}
                    {errorMessage && <p className={errorMessage === 'Error: Each option in a question must be unique.' ? 'error-message red' : 'error-message green'}>{errorMessage}</p>}
                    <button type="button" onClick={handleAddQuestion}>Add Question</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddExam;
