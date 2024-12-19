import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const categories = [
  "Bijili & Chorsa Crackers",
  "Bomb Varieties",
  "Colour Matches",
  "Colourful Fountains",
  "Diwali Combo Pack",
  "Elite Function",
  "Fancy Novelties",
  "Fancy Sky Shots",
  "Flower Pots",
  "Ground Chakkar",
  "Kids Special",
  "Lovely Fountains",
  "Mega Display Series (Setout)",
  "Multicolour Shots (Other Brand)",
  "New Arrival",
  "One Sound Crackers",
  "Pandyan's 4\" Wonder Fancy",
  "Pandyan's 2 3/4\" Fancy (3 Pcs)",
  "Pandyan's 4.5\" Mega Display",
  "Pandyan's 4.5\" Double Ball (2 in 1)",
  "Pandyan's 4\" Golden Fancy (6 in 1)",
  "Peacock Fountains",
  "Sparklers",
  "Special Fountains",
  "Twinkling Star",
  "Wonderful Repeating Shots - (Pandyan's Brand)",
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Search Bar */}
      <section id="search" className="py-4 bg-light">
        <div className="container">
          <input
            type="text"
            className="form-control"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Explore Our Categories</h2>
            <p className="text-muted">Choose from a wide variety of spectacular fireworks.</p>
          </div>
          <div className="row g-4">
            {displayedCategories.length > 0 ? (
              displayedCategories.map((category, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card text-center">
                    <img
                      src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(
                        category
                      )}`}
                      className="card-img-top"
                      alt={category}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category}</h5>
                      <p className="card-text">Explore the {category} for your celebrations.</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-center">No categories found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section id="pagination" className="py-4">
        <div className="container text-center">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Home;
