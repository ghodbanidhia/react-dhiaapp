import React from "react";

function Item({ item }) {
  return (
    <li>
      <span>{item.title}</span>
    </li>
  );
}

export default Item;
