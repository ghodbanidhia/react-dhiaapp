import React from "react";

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.searchTerm}
        onChange={(event) => props.onSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
