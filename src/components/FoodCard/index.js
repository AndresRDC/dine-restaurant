import React from "react";
import PropTypes from "prop-types";
import "./index.css";
function FoodCard({ title, text, imageUrl, imageAlt }) {
  return (
    <article className="food-card">
      <aside className="food-card__aside">
        <img className="food-card__image" src={imageUrl} alt={imageAlt} />
      </aside>
      <div className="food-card__body">
        <div className="food-card__content">
          <h3 className="food-card__title">{title}</h3>
          <p className="food-card__text">{text}</p>
        </div>
      </div>
    </article>
  );
}

FoodCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default FoodCard;
