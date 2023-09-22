import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div className="d-flex justify-content-evenly">
      <div className="p-2 w-50%">
        <div className="d-flex align-items-start">
          <div>book image</div>
          <div>
            <button>Remove Favorite</button>
          </div>
        </div>
        <div>Name</div>
        <div>Author</div>
        <div>Discription</div>
      </div>

      <div className="p-2 w-50%">
        <div>Average User Rating: 4.5</div>
        <div>
          <table>User Reviews</table>
        </div>
        <div>Container to leave a review</div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

{
  /* https://www.googleapis.com/books/v1/volumes/{Book Id here} */
}
