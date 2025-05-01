import React from 'react'

function Question({questionss,handleQuiz}) {

  return (
    <div key={questionss.id}>
        <h1>{questionss.question}</h1>
        
        <div>
            {
                questionss.options.map((option,index)=>(
                    
                    <button key={index} onClick={()=>handleQuiz(option)}>
                        <span>{option}</span>
                    </button>
                ))
            }
            
        </div>
    </div>
  )
}

export default Question
