const BookReviews = ({ bookReviewObj }) => {
  return (
    <tr>
      <td>{bookReviewObj.user.userName}</td>
      <td>{bookReviewObj.text}</td>
    </tr>
  );
};

export default BookReviews;
