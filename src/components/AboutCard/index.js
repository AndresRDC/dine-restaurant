import PropTypes from "prop-types";
import "./index.css";
function AboutCard({ title, text, imageUrl, imageAlt }) {
  return (
    <article className="about-card">
      <aside className="about-card__aside">
        <img
          className="about-card__image image-shadow"
          src={imageUrl}
          alt={imageAlt}
        />
      </aside>
      <div className="about-card__body">
        <div className="about-card__content">
          <h2 className="about-card__title">{title}</h2>
          <p className="about-card__text">{text}</p>
        </div>
      </div>
    </article>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default AboutCard;
