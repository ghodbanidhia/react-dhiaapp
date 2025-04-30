import React, { useState } from "react";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}

export default App;
