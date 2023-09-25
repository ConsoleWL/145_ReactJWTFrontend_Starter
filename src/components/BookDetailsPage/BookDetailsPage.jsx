import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import BookReviews from "./BookReviews";

const BookDetailsPage = () => {
  const [user, token] = useAuth();
  const { bookId } = useParams();
  const [bookItem, setBookItem] = useState(null);
  const [bookReviews, setBookReviews] = useState(null);

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
  useEffect(() => {
    fetchBook();
  }, []);

  const fetchReviews = async () => {
    try {
      let response2 = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setBookReviews(response2.data);
      console.log(`Book reviews ${response2.data}`);
    } catch (error) {
      console.log("Error in fetch reviews by Book id in Book DetailsPage");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [token]);

  const reviewItem = bookReviews?.reviews.map((review, index) => (
    <BookReviews key={index} bookReviewObj={review} />
  ));

  // Post a review
  const reviewPost = {
    bookId: "",
    text: "",
    rating: 2, // change it later make a button
  };

  async function postNewCar() {
    try {
      let response = await axios.post(
        "https://localhost:5001/api/Reviews",
        reviewPost,
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    bookItem && (
      <div className="d-flex justify-content-evenly">
        <div className="col-8">
          <div className="d-flex align-items-start">
            <img src={bookItem.volumeInfo.imageLinks.smallThumbnail} />
            <div>
              <button type="button" className="btn btn-success">
                Remove Favorite
              </button>
            </div>
          </div>
          <div>Title: {bookItem.volumeInfo.title}</div>
          <div>Author: {bookItem.volumeInfo.authors}</div>
          <div>Discription: {bookItem.volumeInfo.description}</div>
        </div>

        <div>
          {/*  */}
          <div>Average User Rating: {bookReviews.averageRating}</div>

          {/* list of reviews */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Review</th>
              </tr>
            </thead>
            <tbody>{reviewItem}</tbody>
          </table>

          {/* Leave a review */}
          <div>
            <label className="form-label">Leave a review</label>
            <textarea className="form-control" rows="3"></textarea>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default BookDetailsPage;
