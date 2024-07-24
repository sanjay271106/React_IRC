import React, { useState } from 'react'

const  Counter =()=>{
    const [count,setCount] = useState(0);

    const handleinc =()=>{
        setCount(count+1)
    }
    const handledec =()=>{
        setCount(count-1)
    }
    return (
        <>
        <button onClick={handleinc}>increment</button>
          <p>count:{count}</p>
        <button onClick={handledec}>decrement</button>
        </>
    )
}

export default Counter