import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  // Loading component
  const Loading = () => <div className="text-center">Loading...</div>;

  // Product details display
  const ShowProductDetails = () => {
    if (!product) return null;

    return (
      <>
        <div className="col-md-6 d-flex justify-content-center align-items-center my-3">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6 my-3">
          <h4 className="text-uppercase text-black-50 mb-3">{product.category}</h4>
          <h1 className="display-5 fw-bold mb-4">{product.title}</h1>
          <p className="lead fw-bolder mb-3">
            Rating: {product.rating ? product.rating.rate : "N/A"}{" "}
            <i className="fa fa-star text-warning"></i>
          </p>
          <h3 className="display-6 fw-bold text-success mb-4">${product.price}</h3>
          <p className="lead text-muted mb-4">{product.description}</p>
          <button
            className="btn btn-dark px-4 py-2 me-3"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark px-4 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-5 mx-3">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-danger text-center">{error}</div>
        ) : (
          <ShowProductDetails />
        )}
      </div>
    </div>
  );
};

export default Product;
