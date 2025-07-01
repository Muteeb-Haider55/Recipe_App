import React from "react";
import "./fooditem.css";
const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className="main-container">
      <img className="item-img" src={food.image} alt="" />
      <div className="item-content">
        <p className="item-name">{food.title}</p>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className="item-btn"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
