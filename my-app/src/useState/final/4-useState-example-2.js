import React,{useState} from "react";
const Index=()=>{
    const [firstName,setFirstName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
   
    return(
    <div>
        <form onSubmit={handleSubmit} >
            <div>
            <input type="text" name='firstname' id='password' value={firstName} placeholder="enter fname" onChange={(e)=>setFirstName(e.target.value)}/>
            
            </div>
            <div>
            <input type="email" name='email' id='email' value={email} placeholder="enter email"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <input type="password" name='password' id='password' value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
)
}
export default Index;