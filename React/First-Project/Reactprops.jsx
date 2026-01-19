import React from 'react'

export const Reactprops = (props) => {
   const{name,age,location}=props
  return (
    <div>
        <h2>Name is---{name}</h2>
        <h2>Age is---{age}</h2>
        <h2>Location is---{location}</h2>
    </div>
  )
}
