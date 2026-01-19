import React, { useState } from 'react'

export const ReactConditional2 = () => {
    const[age,setAge]=useState("")
  return (
    <div>
        <h3>Eligible "For Vote or Not....</h3>

        <input type="text" placeholder='Enter Your Age'
        value={age} onChange={(e)=>setAge(e.target.value)}/>
        {age!=="" && ( <h2>{age>=18?"You are Eligible for vote":"You Are Not Eligible for vote"}</h2>)}



    </div>
  )
}
