import React from 'react'

const demo = () => {
    const a=[{
        name:'akon',
        age:30,
        sal:'1lakh'
    },
{
    name:'akon',
    age:250,
    sal:'1.2lakh'   
},
{
    name:'bkon',
        age:50,
        sal:'7lakh'
}]
 
        
        return(
        <div>
           {a.map((eachobj)=>{
        const{name,age,sal}=eachobj;
        return(
        <Print1 name={name} age={age} sal={sal}/>
            )
        })}
        </div>
        )
 

}
const Print1=(({name,age,sal})=>{
    return(<div>
    <h1>my name is {name}</h1>
    <h1>my age is {age}</h1>
    <h1>my sal is {sal}</h1>
    </div>


    );
})

export default demo