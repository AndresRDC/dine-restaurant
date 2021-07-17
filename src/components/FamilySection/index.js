import { useHistory } from "react-router-dom";
import Button from "../Button";
import "./index.css";
import gatheringImage from "../../assets/img/gathering.jpg";
function FamilySection() {
  const history = useHistory();
  const handleClick = () => history.push("/reservation");
  return (
    <article className="family-card">
      <div className="container">
        <div className="family-card__container">
          <aside className="family-card__aside">
            <img
              className="family-card__image image-shadow"
              src={gatheringImage}
              alt="Meeting"
            />
          </aside>
          <div className="family-card__body">
            <div className="family-card__services">
              <p className="family-card__service">Family Gathering</p>
              <p className="family-card__service">Special Events</p>
              <p className="family-card__service">Social Events</p>
            </div>
            <div className="family-card__content">
              <h2 className="family-card__title">Family Gathering</h2>
              <p className="family-card__text">
                We love catering form entire families. So please bring everyone
                along for a special meal with your loved ones. We'll provide a
                memorable experience for all
              </p>
            </div>
            <div className="family-card__btn-wrapper">
              <Button className="family-card__btn" onClick={handleClick}>
                Book a table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FamilySection;
