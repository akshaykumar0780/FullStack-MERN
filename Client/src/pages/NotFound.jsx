import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-btn">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
