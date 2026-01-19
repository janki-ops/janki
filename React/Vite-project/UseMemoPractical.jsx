import React, { useEffect, useMemo, useState } from 'react'


const UseMemoPractical = () => {
    const [count,setCount]=useState(0)
    const double=useMemo(()=>{
        return count*2
    },[count])
       
  return (
    <div>
        <h3> Count :{count}</h3>
        <h3>Double:{double}</h3>

        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemoPractical