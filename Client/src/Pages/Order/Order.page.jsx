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
<div>
      <section>
        <form>
          <div className="container">
            <div className="row gy-0" style={{ paddingTop: "20px" }}>
              <div className="col-md-6 col-xl-8">
                <h1>Shipping Address</h1>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="row">
                  <div className="col text-center align-self-center">
                    <input className="form-control" type="text" placeholder='Enter Coupon code' />
                  </div>
                  <div className="col">
                    <button className="btn btn-primary" type="button">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-xl-8"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Full Name</td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Email Address</td>
                        <td>
                          <input className="form-control" type="email" />
                        </td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          <textarea className="form-control"></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping Type</td>
                        <td>
                          <input type="radio" /> Transport Office Delivery
                        </td>
                      </tr>
                      <tr>
                        <td>State / City / Zipcode</td>
                        <td>
                          <select className="form-select" style={{ marginBottom: "10px" }}>
                            <optgroup label="This is a group">
                              <option value="12" selected>
                                This is item 1
                              </option>
                              <option value="13">This is item 2</option>
                              <option value="14">This is item 3</option>
                            </optgroup>
                          </select>
                          <select className="form-select" style={{ marginBottom: "10px" }}>
                            <optgroup label="This is a group">
                              <option value="12" selected>
                                This is item 1
                              </option>
                              <option value="13">This is item 2</option>
                              <option value="14">This is item 3</option>
                            </optgroup>
                          </select>
                          <input className="form-control" type="text" placeholder="Enter Zipcode" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="row gx-2 gy-3 row-cols-1">
                  <div className="col text-end">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Subtotal</td>
                            <td>250</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>205</td>
                          </tr>
                          <tr>
                            <td>Coupon(-)</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Total</strong>
                            </td>
                            <td>45</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-primary" type="button">
                          Back
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn btn-primary" type="button">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="row" style={{ paddingTop: "20px" }}>
                      <div className="col">
                        <button className="btn btn-primary btn-lg" type="button">
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      </div>
      </div>
  );
};

export default Order;
