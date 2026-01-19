import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ins,del ,upd } from './HelloReduxToolkit/HelloRTKReducer'

const HelloRTK = () => {
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const[id,setId]=useState("")
    const alldata=useSelector((i)=>i.User.data)
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        let{name,value}=e.trget 
        setData({
            ...data,[name]:value
        })
    }

    const saveData=(e)=>{
        e.preventDefault()
        if(id!=""){
            dispatch(upd({id,data}))
        }
        else{
        dispatch(ins(data))}
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
        <form action="#" mathod="post" namr="frm" onSubmit={saveData}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
            <br></br>

            <label htmlFor="">Age</label>
            <input type="number" name="age" id="age" onChange={handleChange} value={data.age} />
            <br></br>

            <label htmlFor="">Name</label>
            <input type="text" name="salary" id="salary" onChange={handleChange} value={data.salary} />
            <br></br>

            <input type="submit" value="Save"/>
        </form>
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
                                <td><button onClick={()=>dispatch(del(index))}>Delete</button>
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

export default HelloRTK