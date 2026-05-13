import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"> LIBRARY APP</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/books">BROWSE BOOKS</Link>
        </li>
        <li>
          <Link to="/add">ADD BOOKS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
