import React, { useState } from 'react'
import QuizResult from './QuizResult'
import { questions } from "./QuizzData"
const Quizz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [correctAns, SetCorrectAns] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [clicked,setClicked]=useState(false)
    const handleplayAgain = () => {
        setCurrentQuestion(0)
        setScore(0)
        SetCorrectAns(0)
        setShowResult(false)
        console.log("working")
    }
    const handleAnswerOption = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 5)
            SetCorrectAns(correctAns + 1)
        }
        setClicked(true)
    }

    const handleNextOption = () => {
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
            setClicked(false)
            
        } else {
            setShowResult(true)
        }

    }
    return (
        <>
            <div>
                <div>
                    {showResult ? (<QuizResult score={score} correctAns={correctAns} handleplayAgain={handleplayAgain}/>) : (<><h5>Score:{score} </h5>
                        <div>
                            <span>Question {currentQuestion + 1} of {questions.length}</span>

                        </div>
                        <div>  {questions[currentQuestion].questionText}</div>
                        <div>{questions[currentQuestion].answerOptions.map((ans, i) => {
                            return <button disabled={clicked} key={i} onClick={() => handleAnswerOption(ans.isCorrect)}>{ans.answerText}</button>

                        })}
                        <br/>
                        <button onClick={handleplayAgain}>Quit</button>
                        <button  onClick={handleNextOption} >Next</button>
                        
                        </div> </>)}


                </div>
                <div>
                    
                    
                </div>
            </div>

        </>
    )
}

export default Quizz