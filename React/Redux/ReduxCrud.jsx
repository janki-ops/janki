import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insFunc,delFunc,updFunc } from './ReduxCrud/ReduxCrudAction'

const ReduxCrud = () => {
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const alldata=useSelector((i)=>i.data)
    const dispatch=useDispatch()
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
        let res=alldata.find((_,index)=>index==id)
        setData(res)
        setId(id)
    }
  return (
    <div>
        <form action="#" method="post" name="frm" onSubmit={saveData}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
            <br></br>

            <label htmlFor="">Age</label>
            <input type="number" name="age" id="age" onChange={handleChange} value={data.age} />
            <br></br>

            <label htmlFor="">Salary</label>
            <input type="number" name="salary" id="salary" onChange={handleChange} value={data.salary} />
            <br></br>

            <input type="Submit" value="Save" />
        </form>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
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
                                <td><button onClick={()=>dispatch(delFunc(index))}>Delete</button>
                                <button onClick={()=>editData(index)}>Edit</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ReduxCrud