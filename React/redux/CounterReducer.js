import { add,minus,reset } from "./CounterAction"

const initialState={
    count:0
}
const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case add:return{
            ...state,
            count:state.count+1
        }

         case minus:return{
            ...state,
            count:state.count-1
        }
       

         case reset:return{
            ...state,
            count:state.count=0
        }
         default:return state

       

        
    }
}
export default CounterReducer