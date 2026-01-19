import { grey } from '@mui/material/colors';
import React, { useState } from 'react'

export const ReactCounter = () => {
    const [count,setCount]=useState(0);

    const secondcount=()=>{
        setCount(count+1);
    }

  return (
    <div>
        <h3>Counter Example</h3>
        <p>Current count:{count}</p>
        <button onClick={secondcount} style={{backgroundColor:"gray",margin:"10px"}}>Increment</button>

    </div>
  )
}
