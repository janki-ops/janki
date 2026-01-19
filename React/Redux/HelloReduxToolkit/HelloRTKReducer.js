import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialstate={
    data:[]
}

const HelloRTKReducer = createSlice({
    name:"User",
    initialState,
    reducers:{
        ins:(state,action)=>{
            state.data=[...state.data,action.payload]
        },
        del:(state,action)=>{
            state.data=state.data.filter((i,index)=>index!=action.payload)

        },
        upd:(state,action)=>{
            state.data=state.data.map((i,index)=>{
                if(index==action.payload.id){
                    i=action.payload.data
                }
                return i
            })
        }
    }
})
  
export const {ins,del,upd}=HelloRTKReducer.actions
export default HelloRTKReducer.reducer