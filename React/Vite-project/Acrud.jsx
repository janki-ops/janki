
// import axios from "axios";
// import { useState } from "react";

// const Acrud=()=>{
//     const[data,setData]=useState({
//         name:"",
//         age:"",
//         salary:""
//     });
//     const[id,setId]=useState("")
//     const[alldata,setAlldata]=useState([]);

//   const handleChange=(e)=>{
//         const{name,value}=e.targert;
//         setData({
//             ...data,
//             [name]:value
//         })
//     }
//     const saveData=(e)=>{
//         e.preventDefault()
//         if(id!=""){
//             axios.put("http://localhost:3000/users/",+id,data)
//             .then((console.log(Updated)))

//         }
//         else{
//         axios.post("http://localhost:3000/users/",data)
//         .then(()=>console.log(Inserted))
//         }
//         disp()
//         setData({
//             name:"",
//             age:"",
//             salary:""
//         })
//     }
//     const disp=(e)=>{
//         axios.get("http://localhost:3000/users")
//         .then((res)=>setAlldata(res.data))
//     }
//     disp()

//     const delData=(id)=>{
//         axios.delete("http://localhost:3000/users/",+id)
//         .then(()=>confirm.log("deleted"))
//         disp();
//     }
//     const editData=()=>{
//         axios.patch("http://localhost:3000/users/",+id)
//         .then((res)=>setData(res.data))
        
//     }
//     disp();


//     return(
//         <div>
//             <h3>API crud Example</h3>
//             <form action="#" method="post" name="frm" onSubmit={saveData}>
               
//                 <label>Name</label>
//                 <input type="text" name="name" value={data.name} onChange={handleChange}/>
//                 <br></br><br></br>
                
//                  <label>Age</label>
//                 <input type="number" name="age" value={data.age} onChange={handleChange}/>
//                 <br></br><br></br>
                 
//                  <label>Salary</label>
//                 <input type="number" name="salary" value={data.salary} onChange={handleChange}/>
//                 <br></br><br></br>

//                 <button type="submit" value="save">Submit</button>
// </form>
//  <table>
//     <th>
//         <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Age</td>
//             <td>Password</td>
//             <td>Action</td>
//         </tr>
//     </th>
//     <tbody>
//         {
//             alldata.map((i)=>{

//                 return(
//                     <tr>
//                         <td>{i.id}</td>
//                         <td>{i.name}</td>
//                         <td>{i.age}</td>
//                         <td>{i.salary}</td>
//                         <td>
//                             <button onClick={()=>delData(i.id)}>Delete</button>
//                              <button onClick={()=>editData(i.id)}>Edit</button>
//                         </td>
//                     </tr>
//                 )
//             })
//         }

//     </tbody>
//  </table>
//         </div>
//     )

// }
// export default Acrud;