import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooks = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      setSearchResults(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log("Error in fetchBooks method", error);
    }
  };

  useEffect(() => {
    if (searchInput) {
      fetchBooks();
    }
  }, [searchInput]);

  return (
    <div>
      <h1>Search book page</h1>
      <SearchBar filterBooks={setSearchInput} />

      {searchResults.length > 0 ? (
        <SearchResults searchResults={searchResults} />
      ) : null}
      {/* stll this thing is in there */}
      {/* <SearchResults searchResults={searchResults} /> */}
    </div>
  );
};

export default SearchPage;

// making change in the code and press save
// bookdetails, search results, favorite to components
