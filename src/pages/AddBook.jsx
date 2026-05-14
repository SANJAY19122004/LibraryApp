import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";
// add book page with form and validation
const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Fiction");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [errors, setErrors] = useState({});
// validate all fields before submitting
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!author.trim()) newErrors.author = "Author is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!rating) {
      newErrors.rating = "Rating is required";
    } else if (rating < 1 || rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    return newErrors;
  };
// handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
// run validation
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
// creating new book object
    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      category,
      description: description.trim(),
      rating: parseFloat(rating),
    };
//dispatching redux
    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <div className="add-book-page">
      <h1>ADD A NEW BOOK</h1>

      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>BOOK TITLE</label>
          <input
            type="text"
            placeholder="ENTER BOOK TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>AUTHOR</label>
          <input
            type="text"
            placeholder="ENTER AUTHOR NAME"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        <div className="form-group">
          <label>CATEGORY</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>FICTION</option>
            <option>NON-FICTION</option>
            <option>SCI-FI</option>
            <option>FANTASY</option>
          </select>
        </div>

        <div className="form-group">
          <label>DESCRIPTION</label>
          <textarea
            placeholder="ENTER BOOK DESCRIPTION"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label>RATING (1 - 5)</label>
          <input
            type="number"
            placeholder="e.g. 4.5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            step="0.1"
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
        <button type="submit" className="btn-primary">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
