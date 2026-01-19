export const add="INSERT"
export const minus="MINUS"
export const reset="RESET"

export const addFunc=()=>{
    return{
    type:add
    }
}
export const minusFunc=()=>{
    return{
        type:minus
    }
}
export const resetFunc=()=>{
    return{
        type:reset
    }
}