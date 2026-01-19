import React, { useEffect, useRef } from 'react'

const UseRefCrud = () => {
  let inp=useRef(null)
  let inp1=useRef(null)

  const saveData=(e)=>{
    e.preventDefault()
    inp.current.focus()
  }
  useEffect(()=>{
    inp.current.focus
  })
  return (
    <div>
        <form  method="post" onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" ref={inp} />
        <br></br>
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" ref={inp1} />
        <br></br>
        <input type="submit" value="Save" />
        </form>
    </div>
  )
}

export default UseRefCrud