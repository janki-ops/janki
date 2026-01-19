import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, minusFunc, resetFunc } from './HelloCounter/HelloCounterAction'

const HelloCounter = () => {
    const count=useSelector((i)=>i.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h3>count is--{count}</h3>
        <button onClick={()=>dispatch(addFunc())}>Add</button>
        <button onClick={()=>dispatch(minusFunc())}>Minus</button>
        <button onClick={()=>dispatch(resetFunc())}>Reset</button>
    </div>
  )
}

export default HelloCounter