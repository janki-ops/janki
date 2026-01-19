import axios from "axios";
import { useEffect, useState } from "react";

const useApiCallCrud=(url)=>{
  const[data,setData]=useState("")
  useEffect(()=>{
    axios.get(url)
    .then((res)=>setData(res.data))
  },[url])
  return[data]
  
}

export default useApiCallCrud;