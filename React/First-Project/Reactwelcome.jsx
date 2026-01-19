import React from 'react'

export const Reactwelcome = () => {
    let topic="JSX(Javascript XML)";
    let content="jsx allows you to write HTML elements inside a javascript";
  return (
    <>
    <div>
    <h3>Welcome to JSX</h3>
    <p>
        {topic}is syntax extension for javascript {content};
    </p>
    </div>
    </>
  )
}
