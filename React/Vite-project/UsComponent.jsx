import React, { useState } from 'react'


export const UsComponent = () => {
  const[data,setData]=useState({
    name:"",
    age:"",
    salary:""
  })
  const[alldata,setAllData]=useState([])
  const[id,setId]=useState("")

  const handleChange=(e)=>{
    let{name,value}=e.target ;
    setData({
      ...data,
    [name]:value
    })
  }
  const saveData=(e)=>{
    e.preventDefault()
    if(id!==""){
      let res=alldata.map((i,index)=>(index==id)?i=data:i)
      setAllData(res)
    }
    else{
    setAllData([...alldata,data]);}
    setData({
      name:"",
      age:"",
      salary:""
    })
  }

  const delData=(id)=>{
     let res= alldata.filter((i,index)=>index!=id)
     setAllData(res)
  }
  const editData=(id)=>{
    let res=alldata.find((i,index)=>index==id)
    setId(id);
    setData(res)
  }
  return (
    <div>
        <h3>User Example</h3>
        <form metho="post" action="#" name="frm" onSubmit={saveData}>
            <label>Name:</label>
            <input type='text' name="name" id="name" value={data.name} onChange={handleChange}/>
            <br></br>
             <label>Age:</label>
            <input type='number' name="age" id="age" value={data.age} onChange={handleChange}/>
            <br></br>
              <label>Salary:</label>
            <input type='number' name="salary" id="salary" value={data.salary} onChange={handleChange}/>
            <br></br>
            <input type='submit' value="save"></input>

        </form>
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
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
