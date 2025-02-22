import React,{useState} from "react";


const Index=()=>{
    const [fname,setFName]=useState('')
    const [age,setAge]=useState()
    const [sal,setSal]=useState()
    console.log(useState)
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(<form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="fname" value={fname} placeholder="enter fname" onChange={(e)=>setFName(e.target.value)}/>
        </div>
        <div>
            <input type="number" name="age" value={age} placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div>
            <input type="number" name="sal" value={sal} placeholder="enter sal" onChange={(e)=>setSal(e.target.value)}/>
        </div>
        <button type="submit">submit</button>
    </form>)
}
export default Index
