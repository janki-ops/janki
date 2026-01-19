import React from 'react'
import { useContext } from 'react';
import { Authentication } from './Authentication';
export const ContextApi = () => {
    const { user, login, logout } = useContext(Authentication);
  return (
    <div  style={{ padding: "50px", textAlign: "center" }}>
    <h1>Context API Authentication</h1>

      {user ? (
        <>
          <h2>Welcome, {user.name} </h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  )
}