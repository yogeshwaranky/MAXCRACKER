import React, { useState } from 'react';

const Order = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'BOBBY CRACKLINGS SPARKLERS 7CM(10PCS)', content: '1Box', price: 20, qty: 1, image: 'assets/img/pexels-photo-38196.jpeg' },
    { id: 2, name: '12CM 4 COLOUR SPARKLERS (10PCS)', content: '1Box', price: 20, qty: 1, image: 'assets/img/pexels-photo-288478.jpeg' },
  ]);
  const [coupon, setCoupon] = useState('');
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
  });

  const handleQtyChange = (id, qty) => {
    setCart(cart.map(item => (item.id === id ? { ...item, qty } : item)));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md text-black bg-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Max FireWorks</a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-center">
                <a className="nav-link active" href="#" style={{ fontSize: 25 }}>Prasath</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <h1 className="text-center" style={{ paddingTop: 20 }}>Ordered Products</h1>
        <div className="table-responsive" style={{ paddingTop: 20 }}>
          <table className="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Content</th>
                <th>Price</th>
                <th className="text-center">Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td><img alt={item.name} src={item.image} width="100" height="100" /></td>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>Rs {item.price}</td>
                  <td className="text-center">
                    <input
                      type="number"
                      style={{ width: 100 }}
                      value={item.qty}
                      onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>Rs {item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="4"></td>
                <td>Total</td>
                <td>Rs {calculateTotal()}</td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td></td>
                <td><button className="btn btn-primary btn-lg" type="button">Proceed to checkout</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <form>
          <div className="container">
            <h1>Shipping Address</h1>
            <div>
              <label>Full Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Address</label>
              <textarea
                className="form-control"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Zipcode</label>
              <input
                className="form-control"
                type="text"
                name="zipcode"
                value={shippingDetails.zipcode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Order;
