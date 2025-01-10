import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <h3>Peshawari Shoes</h3>
        <span>Connect With Us</span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100046586805649&mibextid=ZbWKwL">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://x.com/AmirAzi95226738?s=09">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/amiraziz1221/?utm_source=qr&r=nametag">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
      <div className="contact-box">
        <h3>Menu Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Products</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="contact-box">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
          <li><a href="#Disclaimer">Disclaimer</a></li>
          <li><a href="#TermsOfUse">Terms Of Use</a></li>
        </ul>
      </div>
      <div className="contact-box address">
        <h3>Contact</h3>
        <i className="bx bxs-map">
          <a href="https://www.google.com/maps/place/Peshawar,+Pakistan">
            <span>Peshawar, Pakistan</span>
          </a>
        </i>
        <i className="bx bxs-phone">
          <a href="tel:+923049274032">
            <span>+92 304 9274032</span>
          </a>
        </i>
        <i className="bx bxs-envelope">
          <a href="mailto:amiraziz.uet@gmail.com">
            <span>amiraziz.uet@gmail.com</span>
          </a>
        </i>
      </div>
    </section>
  );
}

export default Contact;
