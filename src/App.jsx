import React, { useState } from 'react'

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
  }
  return (
  <div>{counter}
  <div>
    <button onClick={addValue}>Add</button>
  </div>
  </div>
  )
}

export default App
