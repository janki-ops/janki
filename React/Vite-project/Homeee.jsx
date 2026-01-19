import React, { useRef, useState } from 'react'

export const Homeee = () => {
  let[conunt,setCount]=useState(0)
  let a=useRef(10)
  const addCounter=()=>{
    setCount(conunt+1)
    a.current+=1
    console.log(a);
  }
  return (
    <div>
        <h3>Homeee</h3>
        <h4>Use  Ref Hooks Example</h4>
        <h4>Count is---{conunt}</h4>
        <h3>A is---{a.current}</h3>
        <button onClick={addCounter}>Click Here</button>
        

    </div>
  )
}
