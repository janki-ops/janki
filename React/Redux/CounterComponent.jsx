import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfunc, minusfunc, resetfunc } from './redux/CounterAction'

export const CounterComponent = () => {
    const count=useSelector((i)=>i.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h4>Counter Example</h4>
        <h3>Count is---{count}</h3>
        <button onClick={()=>dispatch(addfunc())}>Add Counter</button>
        <button onClick={()=>dispatch(minusfunc())}>Minus Counter</button>
        <button onClick={()=>dispatch(resetfunc())}>Reset Counter</button>
        

    </div>
  )
}
