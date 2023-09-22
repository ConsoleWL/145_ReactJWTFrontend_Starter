import { Link } from "react-router-dom";

const SearchItem = ({ book }) => {
  return (
    <tr>
      <td>
        <Link to={`/book/${book.id}`}>
          {book.volumeInfo.title} - {book.volumeInfo.authors}
        </Link>
      </td>
    </tr>
  );
};

export default SearchItem;
