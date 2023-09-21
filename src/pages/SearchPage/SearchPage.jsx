import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooks = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log("Error in fetchBooks method", error);
    }
  };

  return (
    <div>
      <h1>Search book page</h1>
      {/* We NEED TO PASS HERE maybe search input maybe something else  some how this fetchBooks Function has to be implemeted*/}
      <SearchBar />
      {/* I think here needs to be passed searchResult */}
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
