import React, { useState } from 'react'

export const ReactConditional = () => {
    const[login,setLogin]=useState(false)

    const handleLogin=()=>{
        setLogin(true)
    }

    const HandleLogout=()=>{
        setLogin(false)
    }

  return (
    <div>
        <h3>Conditional Statement</h3>
        <h2>User Status:{login?"logIn":"logOut"}</h2>

        <button onClick={HandleLogout}>LogOut</button>

        <button onClick={handleLogin}>LogIn</button>

    </div>
  )
}
