import React from 'react'

export const List1 = () => {
    const fruit=["Apple","Banana","Orange","Mango"];
    
    
  return (
    <div>
        <h3>List And key</h3>
        <h3>Fruits List</h3>
        <ul>
            {
            fruit.map((i,index)=>
                (<li key={index}>{i}</li>))
            }
        </ul>

    </div>
  )
}
