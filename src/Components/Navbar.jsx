import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.handleCart);

  // Logout function to clear login state and navigate to the registration page
  const handleLogout = () => {
    setIsLoggedIn(false); // Update login state
    localStorage.removeItem('isLoggedIn'); // Clear login status in local storage
    navigate('/register'); // Redirect to registration page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            LA COLLECTION
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              {!isLoggedIn ? (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> Login
                  </NavLink>
                  <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> Register
                  </NavLink>
                </>
              ) : (
                <button
                  className="btn btn-danger ms-2"
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out me-1"></i> Logout
                </button>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({cartItems.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
