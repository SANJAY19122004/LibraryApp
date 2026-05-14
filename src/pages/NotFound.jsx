import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    // get the current  invalid url
  const location = useLocation();

  return (
    <div className="notfound-page">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
{/* show the invalid url */}
      <p className="invalid-url">
        THE ROUTE <span>"{location.pathname}"</span> DOES NOT EXIST
      </p>
{/* link back to the home page */}
      <Link to="/" className="btn-primary">
       GO BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
