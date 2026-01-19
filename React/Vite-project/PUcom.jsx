import { useState } from "react";
const PUcom=()=>{
   const[data,setData]=useState({
    name:"",
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
    e.preventDefault();
    if(id!==""){
        let res=alldata.map((i,index)=>(index==id)?i=data:i)
        setAllData(res)
    }
    else{
    setAllData([...alldata,data])
    }
   
setData({
    name:"",
    age:"",
    salary:"",
     })
     setId("")
    }
    const delData=(id)=>{
        let res=alldata.filter((i,index)=>index!=id)
        setAllData(res)
    }
    const editData=(id)=>{
        let res=alldata.find((i,index)=>index==id)
        setData(res)
        setId(id)
    }
    return(
        <div>
            <form action="#" method="#" name="frm" onSubmit={saveData}>
                <lable>Name</lable>
                <input type="text" name="name" placeholder="enter Name" 
                onChange={handleChange} value={data.name}/>
                <br></br><br></br>

                <label>Age</label>
                <input type="number" name="age" placeholder="Entter Age"
                onChange={handleChange} value={data.age}/>
                <br></br><br></br>

                <lable>Salary</lable>
                <input type="number" name="salary" value={data.salary} placeholder="Enter Salary" 
                onChange={handleChange}/>

                
                <button value="save">Save</button>
                <button>Cancle</button>
            </form>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
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
export default PUcom;