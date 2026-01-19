import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Userc = () => {
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })

    const[id,setId]=useState("")
    const[alldata,setAllData]=useState([])

    const handleChange=(e)=>{
        let{name,value}=e.target;
        setData({...data,[name]:value})
    }
    const saveData=(e)=>{
        e.preventDefault();
        if(id!==""){
            axios.put("http://localhost:3000/users",+id,data)
        }
        else{
       axios.post("http://localhost:3000/users",data)
       .then(()=>console.log("inserted"))}
    }
    
    disp()
    setId("")
    setData({
        name:"",
        age:"",
        salary:""
    })
    const disp=()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>setAllData(res.data))
    }
    const delData=()=>{
        axios.delete("http://localhost:3000/users"+id)
        disp()
    }
    const editData=()=>{
        axios.patch("http://localhost:3000/users"+id)
        .then((res)=>setData(res))
        setId(id)
    }
    disp()
    disp();
    useEffect(()=>{
        disp()
    },[])

  return (
    <div>
        <h3>axios</h3>
        <form method="post" action="#" onSubmit={saveData}>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
            <br></br>

             <label>Age:</label>
            <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/>
            <br></br>


            <label>Salary:</label>
            <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange}/>
            <br></br>
            <input type='submit' value="Save"/>


        </form>
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </thead>
            <tbody>{
                    alldata.map((i)=>{
                        return(
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    <button onClick={()=>delData(i.id)}></button>
                                    <button onClick={()=>editData(i.id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    }
               ) }</tbody>
        </table>
    </div>
  )
}
