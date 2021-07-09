import React from "react";
import "./index.css";
export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">dine</h2>
      <div className="footer__body">
        <div className="footer__location">
          <p>MARTHWAITE, SEDBERGH</p>
          <p>CUMBRIA</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="footer__open-times">
          <p>OPEN TIMES</p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </footer>
  );
}
