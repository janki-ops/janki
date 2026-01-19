import React, { useState } from 'react'

export const Usestatepractical = () => {
    const[count,setCount]=useState(0)
    const secondcount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h3>Counter Exapmle</h3>
        <p>Curruent coutner{count}</p>
        <button onClick={secondcount}>Increment</button>
    </div>
  )
}
