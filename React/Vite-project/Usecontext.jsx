import React, { useState } from 'react'

export const Usecontext = () => {
  let[name,setName]=useState("Test");
  
  return (
    <div>
      <h3>Context Example</h3>
      <h3>Cmoponent Called...</h3>
      <h4>Name is---{name}</h4>

      <Component2 name={name}/>

    </div>
  )
}
const Component2=({name})=>{
  return(
    <div>
      <h3>Component2 called</h3>
      <Component3 name={name}/>
    </div>
  )
}
const Component3=({name})=>{
  return(
    <div>
      <h3>Component 3 called...</h3>
      <Component4 name={name}/>
    </div>
  )
}
const Component4=({name})=>{
  return(
    <div>
      <h3>Component4 is called..</h3>
      <h4>Final name is--{name}</h4>
    </div>
  )
}


