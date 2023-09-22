import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div>
      <h2>Book details page of {bookId} </h2>
    </div>
  );
};

export default BookDetailsPage;
