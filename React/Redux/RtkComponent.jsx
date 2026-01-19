import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ins,del,upd} from './RTK/RtkReducer'

export const RtkComponent = () => {
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const[id,setId]=useState("")
    const alldata=useSelector((i)=>i.User.data)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
         const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id!==""){
            dispatch(upd({id,data}))
        }
        else{
        dispatch(ins(data))
        }
        setData({
            name:"",
            age:"",
            salary:""
        })
       setId("") 
    }

       const editData=(id)=>{
            let res=alldata.find((_,index)=>index==id)
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
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
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
                                    <button onClick={()=>dispatch(del(index))}>Delete</button>
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
