import React, { useEffect, useState } from 'react'

export const Localstoragecrud = () => {
    const[data,setData]=useState([]);
    const[form,setForm]=useState({
        name:"",
        age:"",
        email:""
    })
    const[id,setId]=useState("");
    const handleChange=(e)=>{
        let{name,value}=e.target;
        setForm({...form,[name]:value})
    }

    useEffect(()=>{
        let allData=JSON.parse(localStorage.getItem("userData"));
        if(allData!=null)
        setData(allData)
    },[]);

    const handleSubmit=(e)=>{
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
        setData(data1)
        localStorage.setItem("userData",JSON.stringify(data1));
        setForm({
            name:"",
            age:"",
            email:""
        })
        setId("");
    }
    const delData=(id)=>{
        let res=data.filter((i,index)=>index!=id);
        setData(res)
        localStorage.setItem("userData",JSON.stringify(res))

    }

    const editData=(id)=>{
        let res=data.find((i,index)=>index==id)
        setForm(res)
        setId(id)
    }
  return (
    <div>
        <form name="frm" action="#" method="post" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={form.name} onChange={handleChange}/>
            <br></br>

            <label>Age</label>
            <input type='number' name="age" id="age" value={form.age} onChange={handleChange}/>
            <br></br>

            <label>Email</label>
            <input type='email' name="email" id="email" value={form.email} onChange={handleChange}/>
            <br></br>

            <input type='submit' value="Save"/>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
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
                                <td>{i.email}</td>
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
