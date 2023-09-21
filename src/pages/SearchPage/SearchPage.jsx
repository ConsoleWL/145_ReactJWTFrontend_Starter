import axios from "axios";

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
    </div>
  );
};

export default SearchPage;
