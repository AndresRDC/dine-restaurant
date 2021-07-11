import React from "react";
import "./index.css";
import FoodCardsList from "../FoodCardsList";

const title = "A few highlights from our menu";
const text =
  "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.";
function MenuSection() {
  return (
    <article className="menu">
      <div className="container">
        <div className="menu__container">
          <div className="menu__body">
            <div className="menu__content">
              <h2 className="menu__title">{title}</h2>
              <p className="menu__text">{text}</p>
            </div>
          </div>
          <div className="menu__foods">
            <FoodCardsList />
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuSection;
