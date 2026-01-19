 import React,{useEffect,useState} from "react";
 import axios from "axios";

const ApiEample=()=>{
    const[userdata,setUserdata]=useState([]);
    useEffect(()=>{
         axios.get("https://fakestoreapi.com/users")
         .then((res)=>setUserdata(res.data))
//    fetch('https://fakestoreapi.com/users')
//   .then(response => response.json())
//   .then(data => setUserdata(data));
// //   .catch((err)=>{
//     console.log(err);
//     console.log("Error bin API Calling")
//   })
    },[]);

    return(
        <div>
            <h3>Api Example</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </tbody>
                {userdata.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })}
            </table>
        </div>

)}

export default ApiEample;