import React,{useState} from 'react'

const Index = () => {
    const [showData,setShowData]=useState(true)
    const handleChange=()=>{
        setShowData(!showData);

    }
  return (
    <div>
    <button onClick={handleChange}>{showData ? 'hide' :'show'}</button><br></br>
    {showData?'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries' :'Data is hidden'
    }
    </div>
  )
}

export default Index