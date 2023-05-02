import React, { useState } from 'react'

const Counter = () => {

  let initialCount = 0;
  const [counter, setCounter] = useState(initialCount);
  return (
    <div className='container'>
      <h1>Counter: {counter} </h1>
      <div>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={()=> setCounter(initialCount)}>Reset</button>
        <button onClick={()=> setCounter(counter - 1)}>-</button>
      </div>
    </div>
  )
}

export default Counter