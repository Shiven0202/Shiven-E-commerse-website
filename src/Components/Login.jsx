import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  });

  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in from local storage
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setErrorMessage('');
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Store login status
      navigate('/');
    } else {
      setValidated(true);
      setErrorMessage('Please fill out all required fields correctly.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login status
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      zip: '',
      agree: false,
    });
    navigate('/');
  };

  return (
    <div className="container mt-5">
      {!isLoggedIn ? (
        <form
          className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`}
          noValidate
          onSubmit={handleSubmit}
        >
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please enter your first name.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please enter your last name.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="username" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

          
    

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agree">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      ) : (
        <div>
          
          <h2 >Logout Your Profile {formData.username}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;