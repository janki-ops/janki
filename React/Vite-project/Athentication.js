import React, { createContext, useState } from 'react'
export  const Authentication=createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const login = (username) => {
    setUser(username);
    };

    const logout = () => {
    setUser(null);
    };
  return (
    <Authentication.Provider value={{ user, login, logout }}>
      {children}
    </Authentication.Provider>
  )
}