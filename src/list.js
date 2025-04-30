import React from "react";
import Item from "./Item";

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;
