import styled from "styled-components";
import abc from '../src/mystyle.module.css'

const Secondcomponent=(props)=>{
    let H4=styled.h4`
    color:red ;
    background-color:yellowgreen;
    `

    return(
        <>
        <div>
            <h3>Secondcomponent created...</h3>
        </div>
        <div>
            <h4>Name is --{props.myname}</h4>
            <h4>Age is--{props.myage}</h4>
            <H4>salary is--{props.sal}</H4>
            <div className={abc.box}></div>
            
        </div>

        </>

    )
}

export default Secondcomponent;