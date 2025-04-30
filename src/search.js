function Search({ searchTerm, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
