import React from "react";
import "./index.css";

export default function Header({ subtitle, text }) {
  return (
    <header className="header">
      <div className="header__image"></div>
      <div className="header__body">
        <h1 className="header__title">dine</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
        <p className="header__text">{text}</p>
      </div>
    </header>
  );
}
