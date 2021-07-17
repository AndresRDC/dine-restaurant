import PropTypes from "prop-types";
import Header from "../Header";
import Reservation from "../Reservation";
import Footer from "../Footer";

export default function ViewReservation({
  reservation,
  saveReservation,
  deleteReservation,
}) {
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
      <Reservation
        reservation={reservation}
        saveReservation={saveReservation}
        deleteReservation={deleteReservation}
      />
      <Footer />
    </div>
  );
}

ViewReservation.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
  saveReservation: PropTypes.func,
  deleteReservation: PropTypes.func,
};
