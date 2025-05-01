import React from 'react'

function Result({score,questionCount}) {
  return (
    <div>
       <h1>Sizin imtahan baliniz: {score}/{questionCount}</h1>
       <h1 style={{fontSize:'2rem'}}>
          {score ==0
             ? '🤬'
             : (score==1) || (score==2) ? '😐'
             : '😁'
          }
       </h1>
       <button onClick={()=>window.location.reload()}>Yeniden basla</button>
    </div>
  )
}

export default Result
