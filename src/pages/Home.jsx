import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Home page with welcome message, categories and popular books
const Home = () => {
  // Get books from Redux store
  const books = useSelector((state) => state.books.list);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];
  // Show only first 4 books as popular books
  const popularBooks = books.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>WELCOME TO LIBRARY APP</h1>
        <p>EXPLORE THOUSANDS OF BOOKS ACCROSS VARIOUS CATEGORIES</p>
        <Link to="/books" className="btn-primary">
          BROWSE ALL BOOKS
        </Link>
      </section>

      <section className="categories-section">
        <h2>BROWSE BY CATEGORY</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-section">
        <h2>POPULAR BOOKS</h2>
        <div className="books-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-card-body">
                <h3>{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <span className="book-category">{book.category}</span>
                <p className="book-rating">⭐ {book.rating}</p>
              </div>
              <Link to={`/book/${book.id}`} className="btn-details">
                VIEW DETAILS
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
