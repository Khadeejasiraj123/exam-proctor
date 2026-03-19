import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { ExamContext } from '../../helpers/contexts';
import "../ExamPrimary.scss";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function StartMenu() {
  const baseURL = "http://localhost:3005";
  let { id } = useParams();
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setExamState("mainExam")
    axios.post(`${baseURL}/api/questions/exam/${id}`, {
      score: 0.00,
    })
      .then((response) => {
        console.log("store score successfully~~~!!!! ");
      });
  }
  const { examState, setExamState, info } = useContext(ExamContext);
  return (
    <div className="start-menu">
      <h2>{info.type}</h2>
      <p>When you're ready...</p>
      <Button variant="contained" size="large" className="start-menu-btn" onClick={() => {
        handleSubmit()
      }}>
        Start Exam
      </Button>
    </div>
  )
}
