import SearchItem from "./SearchItem";

const searchResults = ({ searchResults }) => {
  const bookItem = searchResults.map((book) => (
    <SearchItem key={book.id} book={book} />
  ));
  return (
    <div>
      <h4>Search Page</h4>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{bookItem}</tbody>
      </table>
    </div>
  );
};

export default searchResults;
