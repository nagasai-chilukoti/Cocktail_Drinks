import React,{useState,useEffect} from 'react'
const url='https://jsonplaceholder.typicode.com/users'

const Index = () => {
    
    const[usersData,setUsersData]=useState([])
    const[loading,setLoading]=useState(false)
    const[isError,setIsError]=useState({status:false,msg:''})
    
  const fetchUsersData=async(apiurl)=>{
    setLoading(true)
    try
  {
    const response=await fetch(apiurl)
    const data=await response.json()
  
    setUsersData(data)
    setLoading(false)
    setIsError({status:false,msg:''})
  }
  catch(error){
    setLoading(false)
    setIsError({status:true,msg:error.message||'some thing goes wrong'})
  }
}
useEffect(()=>{
    fetchUsersData(url)
},[])
if(loading)
{
  return(<div><h3>loading...</h3></div>)
}
if(isError.status){
  return(<h3>{isError.msg}</h3>)
}

return (
    <div>useEffect-example
        <ul>
            {usersData.map((eachObj)=>{
                const {id,name,email}=eachObj
                return(<li key={id}>
                  <div> {name}</div>
                  <div> {email}</div>
                    </li>)
            })}
            
           
        </ul>
    </div>
  )
}

export default Index