import React, { useState } from 'react'

export const ReactHandlingEvent2 = () => {
    const[text,setText]=useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
        <h3>ReactHandlingEvent2</h3>
        <form>
        <input type="text" placeholder='Type Something...' value={text} onChange={handleChange} />

        <h2>You Typed here...{text}</h2>
        </form>
    </div>
  )
}
