// import { useRef } from "react";
import React, {useRef} from 'react'


function App() {
    const inputRef = useRef(null);
    const handleButtonClick = () => {
        inputRef.current.focus();
    }
  return (
    
    <div>
        <input ref={inputRef}>
        </input>
        <button onClick={handleButtonClick} >enter</button>
    </div>
  )
}

export default App