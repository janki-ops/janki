import {useState} from 'react'

export const Statecomponent = () => {
    const[name,setName]=useState("janki")
    const[count,setCount]=useState(20)

    let newName=()=>{
        setName("TEST")
    }
  return (
    <>
    <div>Statecomponent</div>
    <h4>Name is --{name}</h4>
    <h4>Count is --{count}</h4>

    <button onClick={newName}>Change Name</button>
    <button onClick={()=>setCount(25)}>Add Counter</button>

    </>
  )
}
export default Statecomponent;
