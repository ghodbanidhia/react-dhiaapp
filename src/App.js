import React, { useState, useEffect } from "react";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}

export default App;
