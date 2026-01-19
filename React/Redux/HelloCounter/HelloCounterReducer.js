import React from 'react'
const initialstate={
    count:0
}

const HelloCounterReducer = (state,action)=>{
    switch(action.type){
        case add:return{
            ...state,count:state.count+1
        }
        case minus:return{
            ...state,count:state.count-1
        }
        case reset:return{
            ...state,count:state.count=0
        }
        default :return state
    }
}
 

export default HelloCounterReducer