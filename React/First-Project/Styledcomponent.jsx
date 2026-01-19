
import React from 'react'
import styled from 'styled-components'

export const Styledcomponent = (props) => {
    let H3=styled.h3`
    display:flex;
    justify-content:center;
    align-items:center
    `

    let P=styled.p`
    display:flex;
    justify-content:center;
    align-items:center
    `

    let Div=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    `

    let Button=styled.button`
    background-color:${(props)=>(props.primary?'#6caff7ff' : '6c757d')};
    padding:5px 15px;
    border:2px solid black;
    border-radius:5px;
    cursor:pointer;
    `

  return (
    <>
    <div>
        <card>
    <H3>Styledcomponent</H3>
    <P>This is a simple example of using styled<br></br> component in react without themes.</P>
    
    <Div>
        <Button primary>Primary</Button>
        <Button style={{marginLeft:'10px'}}>Secondary</Button>
    </Div>
    
    
    
    </card>
    </div>
    </>
  )
}
