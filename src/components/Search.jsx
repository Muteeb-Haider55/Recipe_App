import React, { useEffect, useState } from "react";
import "./search.css";
const URL = import.meta.env.VITE_RECIPE_SEARCH;
const key = import.meta.env.VITE_API_Key;

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFoode() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${key}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFoode();
  }, [query]);

  return (
    <div className="search-container">
      <input
        className="input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default Search;
