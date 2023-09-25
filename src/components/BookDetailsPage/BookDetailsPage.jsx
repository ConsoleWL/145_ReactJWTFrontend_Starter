import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookItem, setBookItem] = useState(null);
  const [bookReviews, setBookReviews] = useState([]);

  console.log(`book item ${bookItem}`);

  const fetchBook = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookItem(response.data);
      console.log(`Book details ${response.data}`);
    } catch (error) {
      console.log("Eror in fetchBook by id in Book DetailsPage ", error);
    }
  };

  // const fetchReviews = async () => {
  //   try {
  //     let response2 = await axios.get(
  //       `https://localhost:5001/api/BookDetails/${bookId}`
  //     );
  //     setBookReviews(response2);
  //     console.log(`Book details ${response2}`);
  //   } catch (error) {
  //     console.log("Error in fetch reviews by Book id in Book DetailsPage");
  //   }
  // };

  useEffect(() => {
    fetchBook();
  }, []);

  // useEffect(() => {
  //   fetchReviews();
  // fetchReviews();
  // }, []);

  return (
    bookItem && (
      <div className="d-flex justify-content-evenly">
        <div className="p-2 w-50%">
          <div className="d-flex align-items-start">
            <img src={bookItem.volumeInfo.imageLinks.smallThumbnail} />
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
    )
  );
};

export default BookDetailsPage;
