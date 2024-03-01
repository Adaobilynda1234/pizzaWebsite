import React from "react";
import "../Styles/Home.css";
import BannerImage from "../assets/pizza.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Adaobi's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
