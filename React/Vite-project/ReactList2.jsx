import React from 'react'

export const ReactList2 = () => {
  const users=
     [{id:1,name:"janki"},
      {id:2,name:"raj"},
      {id:3,name:"test"}]
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.id}.{user.name}</li>
       ))}
      </ul>
      
    </div>
  )
}

