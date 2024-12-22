import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png"; // Your detailed logo
import adminImg from "../../assets/img/admin.webp"; // Admin avatar
import cart from "../../assets/img/cart.png"
export function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <header style={{ marginBottom: "24px" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-light bg-primary shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src={logo}
                alt="Max Crackers Logo"
                style={{
                  height: "80px", // Adjust for logo size
                  marginRight: "10px",
                  width: "150px",
                }}
              />
              {/* Uncomment and style if needed */}
              {/* <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
                Max Crackers
                <br />
                <small style={{ fontSize: "0.9rem", color: "#ddd" }}>
                  "Light Up Your Celebrations!"
                </small>
              </span> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
  className="collapse navbar-collapse"
  id="navbarNav"
  
>
              <ul className="navbar-nav mx-auto" >
                {/* Navigation Links */}
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="/Product">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="/Order">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-gray-300" href="#">Contact Us</a>
                </li>
              </ul>
              {/* Admin Section */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-link d-flex align-items-center text-white" href="#">
                    <img
                      src={adminImg}
                      alt="Admin"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
                    <span className="d-none d-md-inline">Admin</span> {/* Show text only on large screens */}
                  </a>
                </li>
                 {/* Add to Cart Section */}
                 <li className="nav-item d-flex align-items-center">
                  <a className="nav-link d-flex align-items-center text-white" href="#">
                    <img
                      src={cart} // Use your cart icon image here
                      alt="Cart"
                      style={{
                        width: "40px", // Adjust the size as needed
                        height: "40px",
                        marginRight: "8px",
                      }}
                    />
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
