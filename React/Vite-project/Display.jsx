import React, { memo } from 'react'

 const Display = ({alldata}) => {
    console.log("dispaly component called");
  return (
    <div>
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            
{/* //usecallback hooks=to prevent unneccessary funtion
//-->returns memoized function
..>to freeze a function */}

          </thead>
          <tbody>
            {
                alldata.map((i,index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.password}</td>

                    
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
    </div>
  )
}
export default memo(Display);
