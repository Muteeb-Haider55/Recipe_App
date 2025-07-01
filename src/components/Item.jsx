import React from "react";
import "./item.css";
const Item = ({ item, index }) => {
  return (
    <div>
      <div className="item-container" key={index}>
        <div className="img-container">
          <img
            className="img"
            src={`${import.meta.env.VITE_ITEM_IMG}/` + item.image}
            alt=""
          />
        </div>
        <div className="name-container">
          <div className="name">{item.name}</div>
          <div className="amount">
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
