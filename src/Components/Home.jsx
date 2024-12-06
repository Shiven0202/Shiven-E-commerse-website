import React from "react";
import Bg from "../Components/assets/bg.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card bg-dark text-white border-0">
        <img src={Bg} className="card-img" alt="Background" height="500px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div classNameName="container">
            <h5 className="card-tittle display-3">NEW SEASON ARRIVAL</h5>

            <p className="card-text lead fs-2 ">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
