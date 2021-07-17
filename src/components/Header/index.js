import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";
import Button from "../Button";

export default function Header({ subtitle, text, nameNavigate, pathNavigate }) {
  const history = useHistory();
  const handleClick = () => history.push(pathNavigate);
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__image"></div>
          <div className="header__body">
            <h1 className="header__title">dine</h1>
            <h2 className="header__subtitle">{subtitle}</h2>
            <p className="header__text">{text}</p>
            <Button
              fill="outline"
              size="default"
              color="primary"
              fontColor="primary"
              onClick={handleClick}
            >
              {nameNavigate}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string,
  text: PropTypes.string,
  nameNavigate: PropTypes.string,
  pathNavigate: PropTypes.string,
};
Header.defaultProps = {
  subtitle: "",
  text: "",
  nameNavigate: "Home",
  pathNavigate: "/",
};
