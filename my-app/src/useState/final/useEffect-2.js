import React,{useState,useEffect} from "react";
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const Index=()=>{
    const[drinksData,setDrinksData]=useState([])
    const fetchDrink=async(apiurl)=>{
        const response=await fetch(apiurl)
        const {data}=await response.json()
        console.log(data)
    }
    useEffect(()=>{fetchDrink(url)},[])
    return(<div>drinks count:{drinksData.length}</div>)

}
export default Index