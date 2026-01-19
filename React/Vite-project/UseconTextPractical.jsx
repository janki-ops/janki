import React, { createContext, useState } from 'react'
import { Usecontext } from './Usecontext'
const UserData=createContext()

export const UseconTextPractical = () => {
    const[name,setName]=useState("TEST")
  return (
    <div>
        <h3>Component1 is called</h3>
        <h3>Name is--{name}</h3>
        <UserData.Provider value={name}>
            <Component2/>
        </UserData.Provider>

    
    </div>
    
  )
}
const Component2=()=>{
    return(
        <div>
        <h3>2 is called</h3>
        <Component3/>

            
        </div>
    )
}
const Component3=()=>{
    return(
        <div>
        <h3>3 is called</h3>
        <Component4/>

            
        </div>
    )
}
const Component4=()=>{
    let name=Usecontext(UserData)
    return(
        <div>
            Component4 is called
            final name is called{name}
        </div>
    )
}