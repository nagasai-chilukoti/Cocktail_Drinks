import React,{useState,useEffect}from "react";
const Index=()=>{
   const[count,setCount] =useState(10);
   const[toggle,setToggle]=useState(true)
   
 
   
   useEffect(()=>{
    console.log('this is useEffect',count)
   },[count,toggle])
    return(
        <div>
            <h1 onClick={()=>setToggle(!toggle)}>{toggle?'open' :'close'}</h1>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <span>{count}</span>
        <button onClick={()=>{setCount(count-1)}}>+</button>
        </div>
    )
}

export default Index;