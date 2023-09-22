const SearchItem = ({ book }) => {
  return (
    <tr>
      <td>{book.volumeInfo.title}</td>
      <td>{book.volumeInfo.authors}</td>
    </tr>
  );
};

export default SearchItem;
