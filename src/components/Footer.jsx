import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div data-aos="fade-right" className="left">CODER</div>
          <div data-aos="fade-left" className="right">
            <p>Fatehpur UTTAR PRADESH</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div data-aos="fade-left" className="left">
            <p>Developed By CODER</p>
          </div>
          <div data-aos="fade-right" className="right">
            <p>All Rights Reserved By @Coder.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;