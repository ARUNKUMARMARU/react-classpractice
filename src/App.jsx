import React, { useState } from 'react'

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
  }

  const zeroValue = () => {
    setcounter(0);
  }

  const reduceValue = () => {
    setcounter(counter - 1);
  }
  return (
  <div>{counter}
  <div>
    <button onClick={addValue}>Add</button>
    <button onClick={zeroValue}>Zero</button>
    <button onClick={ reduceValue}>Subract</button>
  </div>
  </div>
  )
}

export default App
