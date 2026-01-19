import React, { useCallback, useState } from 'react'
import Display from './Display'

export const Short = () => {
    const[data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const[alldata,setAllData]=useState([])
    const[id,setId]=useState("")

    const handleChange=(e)=>{
      let{name,value}=e.target;
      setData({...data,[name]:value})
    }

    const saveData=useCallback((e)=>{
      e.preventDefault()
      
    
      
      setAllData([...alldata,data])
      setId("")
      setData({
      name:"",
      email:"",
      password:"",
     })
    },[data])
   

    
     
  return (
    <div>
        <h3>Short Method </h3>

        <form method="post" name="frm" action="#" onSubmit={saveData}>
            <lable>Name:</lable>
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/>
            <br></br>

             <lable>Email:</lable>
            <input type="email" name="email" id="email" onChange={handleChange} value={data.email}/>
            <br></br>
            
            <lable>Password:</lable>
            <input type="password" name="password" id="password" onChange={handleChange} value={data.password}/>
            <br></br>

            <input type="submit" value="Save"/>
        </form>

       <Display alldata={alldata}/>
    </div>
  )
}

