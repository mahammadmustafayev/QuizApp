import  { useState } from 'react'
import Result from './Result'
import Question from './Question'

function Quiz() {
    const questions=[
        {
            "id":1,
            "question":"Aprel ayi nece gunden ibaretdir?",
            "options":['28','30','31','27'],
            "answer":'30'
        },
        {
            "id":2,
            "question":"Elifbada nece herf var?",
            "options":['32','30','31','27'],
            "answer":'32'
        },
        {
            "id":3,
            "question":"Bir ilde nece gun var?",
            "options":['300','345','365','366'],
            "answer":'365'
        },
        {
            "id":4,
            "question":"Gun hansi terefden doqur?",
            "options":['Şərq','Qərb','Şimal','Cənub'],
            "answer":'Şərq'
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false)

    const handleQuiz=(selectedOption)=>{

        if (questions[currentQuestion].answer==selectedOption) {
            setScore(score+1);
        }
        const nextQuestion= currentQuestion+1;
        if (nextQuestion<questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowResult(true);
        }
        console.log(score)
    }
  return (
    <>
    {
        showResult 
        ?
        <Result score={score} questionCount={questions.length}/>
        :
        <Question questionss={questions[currentQuestion]} handleQuiz={handleQuiz}/>
    }
    </>
  )
}

export default Quiz
