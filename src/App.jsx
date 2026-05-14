import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  // list of valid routes
  const validRoutes = ["/", "/books", "/add"];
  const isValidRoute =
    validRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/books/") ||
    location.pathname.startsWith("/book/");

  return (
    <>
      {isValidRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
