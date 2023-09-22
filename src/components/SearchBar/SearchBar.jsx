const SearchBar = ({ filterBooks }) => {
  return (
    <div>
      <input
        onChange={(e) => filterBooks(e.target.value)}
        placeholder="Search for a book"
      />
    </div>
  );
};

export default SearchBar;
