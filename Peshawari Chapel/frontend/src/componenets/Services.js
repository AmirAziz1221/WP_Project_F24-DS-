import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Services</span>
        <h2>Delivering quality and trust</h2>
      </div>
      <div className="servives-container">
        <div className="s-box">
          <img src="images/Order.jpeg" alt="Place an Order" />
          <h3>Place an Order</h3>
          <p>
            Browse through our collection and order your favorite pair of
            Peshawari Shoes with ease.
          </p>
        </div>
        <div className="s-box">
          <img src="images/dilivery.png" alt="Fast Shipping" />
          <h3>Fast Shipping</h3>
          <p>
            We ensure timely delivery of your order, right to your doorstep.
          </p>
        </div>
        <div className="s-box">
          <img src="images/reliable.png" alt="Reliable Delivery" />
          <h3>Reliable Delivery</h3>
          <p>
            Receive your handcrafted Peshawari Shoes in pristine condition.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
