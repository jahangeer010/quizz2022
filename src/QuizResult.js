import React from 'react'
import {questions} from "./QuizzData"

const QuizResult = (props) => {

  return (
    <div>QuizResult
        <h2>Completed</h2>
        <h4>Total Score {props.score}</h4>
        <h4>Your Correct Question {props.correctAns} out of {questions.length}</h4>
        <button onClick={props.handleplayAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult