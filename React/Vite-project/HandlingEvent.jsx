import React, { useState } from 'react'

export const HandlingEvent = () => {
    const[text,setText]=useState("Not Clicked")

    const handleClick=()=>{
        setText("Clicked")
    }
  return (
    <div>
        <h3>Handling Event:</h3>
        <h2>{text}</h2>
        <button onClick={handleClick}>Clicked Here</button>

        
    </div>
  )
}
