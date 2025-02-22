import React,{useState}from "react";
const Index=()=>{
   const[count,setCount] =useState(10);
   const incre=()=>{
    setCount((prevcount)=>{
        return prevcount+1
    })
    setCount((prevcount)=>{
        return prevcount+1
    })
   }
   const decre=()=>{
    setCount((prevcount)=>{
        return prevcount-1
    })
    setCount((prevcount)=>{
        return prevcount-1
    })
   }
   
   
    return(
        <div>
        <button onClick={decre}>-</button>
        <span>{count}</span>
        <button onClick={incre}>+</button>
        </div>
    )
};
export default Index;