import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

 const PropsExample=({myname, myage})=>{
    // const PropsExample=(props)=>
    // {
return (
      <div>
       {/* <h4>Name is---{props.myname}</h4>
        <h4>Age is---{props.myage}</h4>  */}
         <h4>Name is---{myname}</h4>
         <h4>Age is---{myage}  </h4>
      </div>
    )
}
// PropsExample.defaultProps={
//     myname:"TEST",
//     myage:"45"
// }

//  PropsExample.PropTypes={
//  myname:PropTypes.string.isRequired,
//  myage:PropTypes.number.isRequired

// }




export default PropsExample;