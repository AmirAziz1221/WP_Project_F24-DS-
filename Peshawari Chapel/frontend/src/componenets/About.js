import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/3.jpeg" alt="About Peshawari Shoes" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>We craft traditional <br /> Peshawari footwear</h2>
        <p>
          Peshawari Shoes are a symbol of culture and comfort. Handcrafted with
          precision, they reflect the tradition and artistry of Pakistan.
        </p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default About;
