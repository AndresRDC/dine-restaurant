import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import "./index.css";

function BannerReservation() {
  const history = useHistory();
  const handleClick = () => history.push("/reservation");
  return (
    <aside className="banner-reservation">
      <div className="container">
        <div className="banner-reservation__container">
          <div className="banner-reservation__content">
            <h2 className="banner-reservation__title">
              Ready to make a reservation
            </h2>
            <Button
              fill="outline"
              size="default"
              color="primary"
              fontColor="primary"
              onClick={handleClick}
            >
              Book a table
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BannerReservation;
