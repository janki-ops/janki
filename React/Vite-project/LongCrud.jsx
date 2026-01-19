import React, { useState } from 'react'

const LongCrud = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[salary,setSalary]=useState("")
    const[id,setId]=useState("")
    const[alldata,setAllData]=useState([])

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const saveData=(e)=>{
        e.preventDefault()
        if(id!==""){
            let res=alldata.map((i,index)=>{
                if(index==id){
                    i.name=name,
                    i.age=age,
                    i.salary=salary
                }
                return i
            })
        }
        else
        setAllData([...alldata,{
            "name":name,
            "age":age,
            "salary":salary
        }])
        setName(""),
        setAge(""),
        setSalary("")
        setId("")
    }
    const delData=(id)=>{
        let res=alldata.filter((i,index)=>{
            return index!=id
        })
        setAllData(res)
    }
    const editData=(id)=>{
        let res=alldata.find((i,index)=>{
            return index==id
        })
        setName(res.name)
        setAge(res.age)
        setSalary(res.salary)
        setId(id)
    }
  return (
    <div>
        <form action="#" method="post" name="frm" onSubmit={saveData}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={name}/>
            <br></br>
            <label htmlFor="">Age</label>
            <input type="number" name="age" id='age' onChange={(e)=>setAge(e.target.value)} value={age} />
            <br></br>
            <label htmlFor="">Salary</label>
            <input type='number' name='salary' id='salary' onChange={(e)=>setSalary(e.target.value)} value={salary}/>
            <br></br>
            <input type="submit" value="Save" />
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
                                <td><button onClick={()=>delData(index)}>Delete</button>
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

export default LongCrud