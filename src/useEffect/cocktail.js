import React, { useState, useEffect } from "react";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Final = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Start with empty input
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      const { drinks } = data;
      if (!drinks) {
        throw new Error("No data found");
      }
      setDrinksData(drinks);
    } catch (error) {
      console.error(error);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong...",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ For default first load
  useEffect(() => {
    const defaultURL = `${BASE_URL}c`;
    fetchDrink(defaultURL);
  }, []);

  // ✅ Search when input changes
  useEffect(() => {
    if (searchTerm.trim() === "") return;
    const searchURL = `${BASE_URL}${searchTerm}`;
    fetchDrink(searchURL);
  }, [searchTerm]);

  return (
    <>
      {/* Inline styles for demonstration, you can move to CSS */}
      <style>{`
        .header-container {
          position: relative;
          background-color: black;
          padding: 1rem;
          display: flex;
          justify-content: center; /* Center Hotspot text */
          align-items: center;
          color: orange;
          font-weight: bold;
          font-size: 2rem;
        }
        .header {
          /* No flex-grow so it stays centered */
        }
        form {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          margin: 0;
        }
        input[type="text"] {
          padding: 0.5rem;
          font-size: 1rem;
        }
      `}</style>

      <div className="header-container">
        <div className="header">Hotspot</div>

        {/* Search Bar on the right */}
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search drinks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <hr />

      {/* Loading & Error below header */}
      {loading && <h3>Loading...</h3>}
      {isError.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}

      {!loading && !isError.status && drinksData.length > 0 && (
        <ul className="cocktail-data">
          {drinksData.map((drink) => {
            const { idDrink, strDrink, strDrinkThumb } = drink;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} width="100" />
                </div>
                <div className="text">
                  <h3>{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Final;
