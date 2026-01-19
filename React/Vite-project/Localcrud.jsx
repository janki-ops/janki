import React, { useEffect, useState } from 'react'

export const Localcrud = () => {
    const[data,setData]=useState([])
    const[form,setForm]=useState({
        name:"",
        age:"",
        salary:""
    })
    const[id,setId]=useState("")

    const handleChange=(e)=>{
        let{name,value}=e.target;
        setForm({
            ...form,[name]:value
        })
    }

   useEffect(()=>{
    let allData=JSON.parse(localStorage.getItem("userData"))
    if(allData!=null)
        setData(allData)

   },[])
    const saveData=(e)=>{
        e.preventDefault();
        let data1;
        if(id!==""){
           data1=data.map((i,index)=>{
            if(index==id){
                i=form
            }
            return i
           })
        }else{
            data.push(form)
            data1=[...data];
        }
        setData(data1);
        localStorage.setItem("userData",JSON.stringify(data1))
        setForm({
            name:"",
            age:"",
            salary:""

        })
        setId("")
    }

    const delData=(id)=>{
        let res=data.filter((i,index)=>index!=id)
        setData(res);
        localStorage.setItem("userData",JSON.stringify(res))
    }

    const editData=(id)=>{
        let res=data.find((i,index)=>index==id)
        setForm(res)
        setId(id)
    }

    
  return (
    <div>
        <form name="frm" action="#" method="post" onSubmit={saveData}>
            <label>Name:</label>
            <input type='text' name="name" id="name" value={form.name} onChange={handleChange}/>
            <br></br>

            <label htmlFor="">Age </label>
            <input type='number' name="age" id="age" value={form.age} onChange={handleChange}/>
            <br></br>

            <label>Salary</label>
            <input type='number' name="salary" id="salary" value={form.salary} onChange={handleChange}/>
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
                    data.map((i,index)=>{
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
