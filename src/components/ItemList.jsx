import React from "react";
import Item from "./Item";

const ItemList = ({ food }) => {
  return (
    <div>
      {" "}
      {food &&
        food.extendedIngredients?.map((item, index) => (
          <Item item={item} index={index} />
        ))}
    </div>
  );
};

export default ItemList;
