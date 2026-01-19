import React, { useEffect, useRef } from 'react'

export const UserReferencepractical = () => {
    let inp=useRef(null)
    let inp1=useRef(null)

    const saveData=(e)=>{
        e.preventDefault()
        inp1.current.focus()
        
    }
    useEffect(()=>{
        inp.current.focus
    })
  return (
    <div>Userefexample
        <form method="post" name="frm" onSubmit={saveData} action="#">
            <label>UserName</label>
            <input type="text" name="username" id="username" ref={inp}></input>
            <br></br><br></br>

             <label>Email:</label>
            <input type="email" name="email" id="email" ref={inp1}></input>
            <br></br><br></br>

            <input type='submit' value="save"></input>

           

        </form>
    </div>
  )
}
