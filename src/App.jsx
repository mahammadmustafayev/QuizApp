import { useState } from "react"
import Quiz from "./Components/Quiz"
import './assets/css/style.css'


function App() {
  
  const [isStarted, setIsStarted] = useState(false)
  
  return (
    <div className="main">
      {
        isStarted 
        ?
        <Quiz/>
        :
        <div>
            <h1>Xos gelmisiniz </h1>
            <button onClick={()=>setIsStarted(!isStarted)}>Imtahana basla</button>
        </div>
      }
    </div>
  )
}

export default App
