import React, { useState } from 'react'
import { useDispatch, useSelector, useSelector } from 'react-redux'
import { insFunc, updFunc } from './CrudPractical/CrudAction'

export const Redux = () => {
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const[id,setId]=useState("")
 const alldata=useSelector((i)=>i.data)
 const dispatch=useDispatch()

  const handleChange=(e)=>{
    let{name,value}=e.target
    setData({
        ...data,[name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(id!==""){
        dispatch(updFunc(id,data))
    }
    else{
   dispatch(insFunc(data))
    }
    setData({
        name:"",
            age:"",
            salary:""
        })
       setId("") 
    
  }
  const editData=(id)=>{
    let res=alldata.find((i,index)=>index==id)
    setData(res)
    setId(id)
  }

   

  return (
    <div>

       <form action="#" method="post" onSubmit={handleSubmit}>
            Name:
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
            <br></br>

             Age:
            <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/>
            <br></br>

             Salary:
            <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange}/>
            <br></br>

            <input type="submit" value="Save"/>
        </form>
        <br></br>

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
                                    <button onClick={()=>dispatch(delData(index))}>Delete</button>
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
