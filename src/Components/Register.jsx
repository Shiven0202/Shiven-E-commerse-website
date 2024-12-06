

import React, { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
 
    
    agree: false,
  });

  const [validated, setValidated] = useState(false);

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

    // Check if the form is valid
    const form = event.currentTarget;
    if (form.checkValidity()) {
      navigate('/'); // Navigate to the Home page if form is valid
    } else {
      setValidated(true); // Show validation feedback
    }
  };

  return (
    <div className="container mt-5">
      <form className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your first name.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your last name.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
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
          <label htmlFor="password" className="form-label">
      Password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text"></span>
            <input
              type="text"
              className="form-control"
              id="password"
              value={formData.password}
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

        <div className="col-md-3">
          <label htmlFor="state" className="form-label">State</label>
          <select
            className="form-select"
            id="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            <option>State 1</option>
            <option>State 2</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
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
         <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
