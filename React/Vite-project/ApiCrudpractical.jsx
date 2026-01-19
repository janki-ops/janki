import axios from 'axios'
import React, { useState } from 'react'

export const ApiCrudpractical = () => {
   const[data,setData]=useState({
    nme:"",
    age:"",
    salary:""
   })

   const[alldata,setAllData]=useState([])
   const[id,setId]=useState("")

   const handleChange=(e)=>{
    let{name,value}=e.target
    setData({
        ...data,[name]:value
    })
   }
   const saveData=(e)=>{
    e.preventDefault()
    if(id!==""){
        axios.put("http://localhost:3000/users"+id,data)
        .then(()=>console.log("updated"));
        
    }
    axios.post("http://localhost:3000/users",data)
    .then(()=>console.log("Inserted"))
    disp()
    setData({
        name:"",
        age:"",
        salary:""
    })
    setId("")
    
   }
   const disp=()=>{
    axios.get("http://localhost:3000/users")
    .then((res)=>setAllData(res.data))
   }
   const delData=(id)=>{
    axios.delete("http://localhost:3000/users"+id)
    .then(()=>console.log("deleted"));
    disp()
    
   }
   const editData=(id)=>{
    axios.patch("http://localhost:3000/users"+id)
    .then((res)=>setData(res.data));
    setId(id)
    
   }
   disp()
        
    
    
  return (
    <div>
        <form name="frm" method="post" action="#" onSubmit={saveData}>

            <label htmlFor="">name</label>
            <input type='text' name="name" id="name" value={data.name} onChange={handleChange}/>
            <br></br>

              <label htmlFor="">age</label>
            <input type='number' name="age" id="age" value={data.age} onChange={handleChange}/>
            <br></br>

              <label htmlFor="">name</label>
            <input type='number' name="nsalary" id="salary" value={data.salary} onChange={handleChange}/>
            <br></br>

            <input type='submit' value="Save"/>
        </form>

        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
            <tbody>
                {
                    alldata.map((i,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    <button onClick={()=>delData(index)}>Delete</button>
                                    <button onClick={()=>editData(index)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </div>
  )
}
