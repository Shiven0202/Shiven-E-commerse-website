import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true; // To prevent setting state if component is unmounted
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };
    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                <p className="card-text">${product.price}</p>
                <NavLink to={`/product/${product.id}`} className="btn btn-primary">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
