import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

import image3 from "../../assets/img/offer.jpg";
import image1 from "../../assets/img/fireworks2.jpg";
import image2 from "../../assets/img/giftboxes1.png"
// Import category images


import SPARKLERS from "../../assets/img/Catergory img/SPARKLERS.jpg";
import cakes from "../../assets/img/Catergory img/cakes.jpg";
import CHAKKARS from "../../assets/img/Catergory img/CHAKKARS.jpg";
import fancyfireworks from "../../assets/img/Catergory img/fancyfireworks3.jpg";
import GIFTBOXES from "../../assets/img/Catergory img/GIFTBOXES.jpg"
import FLOWERPOTS from "../../assets/img/Catergory img/FLOWERPOTS1.jpg"
import kidsspecial from "../../assets/img/Catergory img/kidsspecial1.png"
import novelfireworks from "../../assets/img/Catergory img/novelfireworks.jpg"
import rocket from "../../assets/img/Catergory img/rocket2.jpg"
import  speacialshots from "../../assets/img/Catergory img/speacialshots.jpg"
import FAMILYPACK from "../../assets/img/Catergory img/FAMILYPACK.jpg"
import soundcrackers from "../../assets/img/Catergory img/soundcrackers.jpg"
import comets from "../../assets/img/Catergory img/comets.jpg"
import CONFETTI from "../../assets/img/Catergory img/CONFETTI.jpg"
import displaycomets from "../../assets/img/Catergory img/displaycomets.jpg"
// Map category names to their respective images


const imagePaths = {
  SPARKLERS,
  cakes,
  CHAKKARS,
  fancyfireworks,
  GIFTBOXES,
  FLOWERPOTS,
  kidsspecial,
  novelfireworks,
  rocket,
  speacialshots,
  FAMILYPACK,
  soundcrackers,
  comets,
  CONFETTI,
  displaycomets,
};

const categories = [
  "SPARKLERS",
  "cakes",
  "CHAKKARS",
  "fancyfireworks",
  "GIFTBOXES",
  "FLOWERPOTS",
  "kidsspecial",
  "novelfireworks",
  "rocket",
  "speacialshots",
  "FAMILYPACK",
  "soundcrackers",
  "comets",
  "CONFETTI",
  "displaycomets",
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      {/* Carousel */}
      <section id="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption">
                <h3>Welcome to Max Fireworks</h3>
                <p>Experience the best fireworks in the city.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption">
                <h3>Light Up the Sky</h3>
                <p>Perfect for all celebrations and festivals.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption">
                <h3>Colorful Displays</h3>
                <p>Make every moment special with our fireworks.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <section id="search" className="py-4 bg-light">
        <div className="container">
          <input
            type="text"
            className="form-control"
            placeholder="Search categories..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredCategories.map((category, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card text-center">
                  <img
                    src={imagePaths[category]}
                    className="card-img-top"
                    alt={category}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <Link
  to={`/Product?productType=${encodeURIComponent(category)}`}
  className="btn btn-primary"
>
  View Products
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;