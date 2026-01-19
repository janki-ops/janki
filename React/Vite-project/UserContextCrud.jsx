import React, { createContext, useContext, useState } from 'react'
const UserData=createContext()
const UserContextCrud = () => {
    let [name,setName]=useState("Test")
  return (
    <div>
        <h3>Component1 called..</h3>
        <h4>name is....{name}</h4>
        <UserData.Provider value={name}>
    <Component2/>
        </UserData.Provider>
    </div>
  )
}
const Component2=()=>{
    return(
        <div>
            <h4>Component2 called...</h4>
            <Component3/>
        </div>
    )
}

const Component3=()=>{
    return(
        <div>
            <h4>Component3 called...</h4>
            <Component4/>
        </div>
    )
}
const Component4=()=>{
    let name=useContext(UserData)
    return(
        <div>
            <h4>Component4 called...</h4>
            <h3>Final name is--{name}</h3>
        </div>
    )
}

export default UserContextCrud