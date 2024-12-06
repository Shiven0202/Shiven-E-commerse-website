import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delcart, addCart } from '../redux/action'; // Ensure these are correctly imported

const Cart = () => {
  // Access the cart items from Redux state
  const cartItems = useSelector((state) => state.handleCart); // Adjust based on your state structure
  const dispatch = useDispatch();

  // Handle button click to increase/decrease quantity
  const handleButton = (product, type) => {
    if (type === 'increase') {
      dispatch(addCart(product)); // Dispatch action to increase quantity
    } else if (type === 'decrease') {
      dispatch(delcart(product)); // Dispatch action to decrease quantity
    }
  };

  return (
    
    <div className="container py-5 ">
      <h2>Your Cart</h2>
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                   height="250px"
                  width="180px"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="text-uppercase text-black-50">{product.category}</h4>
                  <h1 className="display-5">{product.title}</h1>
                  <p className="lead fw-bolder">
                    Rating: {product.rating ? product.rating.rate : "N/A"}{" "}
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="lead">
                    {product.qty} x ${product.price} = ${product.qty * product.price}
                  </p>
                  <div className="d-flex">
                    <button
                      className="btn btn-outline-dark me-2"
                      onClick={() => handleButton(product, 'decrease')}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleButton(product, 'increase')}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
