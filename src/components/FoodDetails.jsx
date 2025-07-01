import React, { useEffect, useState } from "react";
import "./fooddetails.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `${import.meta.env.VITE_BASE_URL}/${foodId}/information`;
  const key = import.meta.env.VITE_API_Key;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${key}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className="recipe-card">
        <h1 className="recipe-name">{food.title}</h1>
        <img className="recipe-image" src={food.image} alt="" />
        <div className="recipe-details">
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vagitarion ? "🥕Vagitarian" : "🍖Non Vagitariaon"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingrediants</h2>
        <ItemList food={food} />

        <h2>Instructions</h2>
        <div className="recipe-instructions">
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
