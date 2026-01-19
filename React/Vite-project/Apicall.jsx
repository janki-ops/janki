import React from 'react'
import useApiCall from './useApiCall';


export const Apicall = () => {
    const[user]=useApiCall("https://jsonplaceholder.typicode.com/users")
    const[post]=useApiCall("https://jsonplaceholder.typicode.com/posts")
    const[photo]=useApiCall("https://jsonplaceholder.typicode.com/photos")
  return (
    <div>
        <table>
            <caption>User Information</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((i)=>{
                        return(
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.username}</td>
                                <td>{i.email}</td>
                                <td>{i.phone}</td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
        <hr></hr>

         <table>
            <caption>Post Information</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    post.map((i)=>{
                        return(
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.body}</td>
                                
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
        <hr></hr>
    </div>
  )
}
