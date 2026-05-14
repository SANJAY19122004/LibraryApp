import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

// Browse Books page with search and category filter
const BrowseBooks = () => {
  const { category } = useParams();

  const books = useSelector((state) => state.books.list);
  // Search input state
  const [search, setSearch] = useState("");
  // List of all categories for filter buttons
  const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];
  // Filter books by category and search input
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      !category || category === "All" ? true : book.category === category;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-page">
      <h1>BROWSE BOOKS</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-filters">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={cat === "All" ? "/books" : `/books/${cat}`}
            className={`filter-btn ${
              category === cat || (!category && cat === "All") ? "active" : ""
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <p className="no-results">NO BOOKS FOUND.</p>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
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
      )}
    </div>
  );
};

export default BrowseBooks;
