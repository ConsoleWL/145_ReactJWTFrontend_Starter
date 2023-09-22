import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookItem, setBookItem] = useState([]);

  const fetchBook = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookItem(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Eror in fetchBook by id in Book DetailsPage ", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="d-flex justify-content-evenly">
      <div className="p-2 w-50%">
        <div className="d-flex align-items-start">
          <div>book image</div>
          <div>
            <button>Remove Favorite</button>
          </div>
        </div>
        <div>Title: {bookItem.volumeInfo.title}</div>
        <div>Author: {bookItem.volumeInfo.authors}</div>
        <div>Discription: {bookItem.volumeInfo.description}</div>
      </div>

      <div className="p-2 w-50%">
        <div>Average User Rating: 4.5</div>
        <div>User Reviews Table</div>
        <div>Container to leave a review</div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

{
  /* https://www.googleapis.com/books/v1/volumes/{Book Id here} */
}
