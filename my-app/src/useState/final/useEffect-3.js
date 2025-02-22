import React,{useState,useEffect} from 'react';
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const Index=()=>{
    const[drinksData,setDrinksData]=useState([]);
    const[searchTerm,setSearchTerm]=useState('')
    const[loading,setLoading]=useState(false)
    const [isError, setIsError] = useState({ status: false, msg: "" });

    const fetchData = async (apiUrl) => {
        setLoading(true);
    setIsError({ status: false, msg: "" });
        try {
            const response = await fetch(apiUrl);
            const {drinks} = await response.json();
            setDrinksData(drinks);
            setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("no drink found");
      }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setIsError({
              status: true,
              msg: error.message || "something went wrong...",
            });
          }
    };
    
    useEffect(()=>{
        const correctUrl=`${url}${searchTerm || 'p'}`
        fetchData(correctUrl);
    },[searchTerm]);
    return(<div>
        <form className='aa'>
            <h1><strong>Hot Spot</strong></h1>
            <input type='text'
            name='search'
            id='search'
            placeholder='search cocktails              🔍'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            
            />

        </form>
        {/* <hr/> */}
        {loading && !isError?.status && <h3 class='bb'>Loading...</h3>}
      {isError?.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
      {!loading && !isError?.status && (
        <ul className='cocktail-data'>
            {
            drinksData.map((eachdata)=>{
                const{idDrink,strDrink,strDrinkThumb}=eachdata;
                return <li key={idDrink}>
                    <div>
                    <img src={strDrinkThumb} alt={strDrink} style={{ marginTop: '10px' }} />

                    </div>
                    <div className='text'>
                        <h3 align='center'>{strDrink}</h3>
                    </div>
                </li>
            })
        }
        </ul>
    )}
    </div>
  );
};
export default Index

