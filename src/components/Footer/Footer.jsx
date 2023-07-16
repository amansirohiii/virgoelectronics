import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-margin">
          <div className="footer-center">
            <p className="footer-company-name">Virgo Electronics</p><br /><br />
            <p className="footer-links">
              <a href="/" className="link-1">Home</a>
              <a href="/products/all">Products</a>
              <a href="/about">About</a>
              <a href="/contact">Enquiry</a>
            </p>

            <div className="social-icons">
			<a href="https://instagram.com/virgoelectronics" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://facebook.com" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
