export const add="INCREMENT"
export const minus="DECREMENT"
export const reset="RESET"

export const addfunc=()=>{
    return{
        type:add
    }
}

export const minusfunc=()=>{
    return{
        type:minus
    }
}

 export const resetfunc=()=>{
   return{
           type:reset
    }
 }