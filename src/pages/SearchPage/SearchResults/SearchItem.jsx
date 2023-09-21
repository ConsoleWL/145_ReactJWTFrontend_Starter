const SearchItem = ({ book }) => {
  return (
    <tr>
      <td>
        <td>{book.volumeInfo.title}</td>
        <td>{book.volumeInfo.authors}</td>
      </td>
    </tr>
  );
};

export default SearchItem;
