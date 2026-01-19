import React from 'react'
import { ins ,del,upd } from './HelloReduxAction'
const initialstate={
    data:[]
}
const HelloReduxReducer = (state=initialstate,action)=>{
    switch(action.type){
        case ins:return{
            ...state,data:[...state.data,action.payload]
        }
        case del:return{
            ...state,data:state.data.filter((i,index)=>index!==action.payload)
        }
        case upd:return{
            ...state,data:state.data.map((i,index)=>{
                if(index==action.payload.id){
                    i=action.payload.data
                }
                return i
            })
        }
        default:return state
    }
 
}

export default HelloReduxReducer