import React from "react";
import Reservation from "../Reservation";
import Footer from "../Footer";
import Header from "../Header";

export default function ViewReservation() {
  const subtitle = "Reservations";
  const text =
    "We can't wait to host you. If you have any special requirements please feel free to call on the phone number bellow. We'll be happy to accommodate you";

  return (
    <div>
      <Header
        subtitle={subtitle}
        text={text}
        nameNavigate={"Go to home"}
        pathNavigate={"/"}
      />
      <Reservation />
      <Footer />
    </div>
  );
}
