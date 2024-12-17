import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css"; // Import custom styles

// Import images for carousel and categories
import image1 from "../assets/img/fireworks1.jpg";
import image2 from "../assets/img/fireworks2.jpg";
import image3 from "../assets/img/fireworks3.jpg";
import category1 from "../assets/img/category1.jpg";
import category2 from "../assets/img/category2.jpg";
import category3 from "../assets/img/category3.jpg";

function HomePage() {
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

      {/* Categories Section */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Explore Our Categories</h2>
            <p className="text-muted">Choose from a wide variety of spectacular fireworks.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center">
                <img src={category1} className="card-img-top" alt="Category 1" />
                <div className="card-body">
                  <h5 className="card-title">Fancy Sky Shots</h5>
                  <p className="card-text">Create mesmerizing effects in the night sky.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card text-center">
                <img src={category2} className="card-img-top" alt="Category 2" />
                <div className="card-body">
                  <h5 className="card-title">Pandyan's Golden Fancy</h5>
                  <p className="card-text">Perfect for golden-hued celebrations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card text-center">
                <img src={category3} className="card-img-top" alt="Category 3" />
                <div className="card-body">
                  <h5 className="card-title">Colourful Fountains</h5>
                  <p className="card-text">Bright and colorful displays for any occasion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4">
        <div className="container">
          <p>&copy; 2024 Max Fireworks. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="text-light">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-light">
                Terms of Service
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-light">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
