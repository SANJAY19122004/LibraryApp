import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Book Details page shows full info about a selected book
const BookDetails = () => {
  // Get book id from URL 
  const { id } = useParams();

  const books = useSelector((state) => state.books.list);

  // Find the book that matches the id from URL
  const book = books.find((b) => b.id === parseInt(id));

  // If book not found show a message
  if (!book) {
    return (
      <div className="not-found-book">
        <h2>BOOK NOT FOUND!</h2>
        <Link to="/books" className="btn-primary">
         BACK TO BROWSE
        </Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <div className="book-details-card">
        <h1>{book.title}</h1>
        <p className="detail-author">by {book.author}</p>
        <span className="book-category">{book.category}</span>
        <p className="detail-rating">⭐ {book.rating} / 5</p>
        <p className="detail-description">{book.description}</p>
        <Link to="/books" className="btn-primary">
          ← BACK TO BROWSE
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
