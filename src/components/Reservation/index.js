import { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
import ReservationForm from "../ReservationForm";
import ReservationDetail from "../ReservationDetail";

function Reservation({ reservation, saveReservation, deleteReservation }) {
  const [editMode, setEditMode] = useState(false);

  const onSave = (reservation) => {
    saveReservation(reservation);
    setEditMode(false);
  };
  const onDelete = () => {
    deleteReservation();
  };
  const enableEditMode = () => {
    setEditMode(true);
  };
  return (
    <div className="reservation">
      <div className="container">
        <div className="reservation__container">
          {(!reservation || editMode) && (
            <ReservationForm reservation={reservation} onSave={onSave} />
          )}
          {reservation && !editMode && (
            <ReservationDetail
              reservation={reservation}
              onDelete={onDelete}
              enableEditMode={enableEditMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
  saveReservation: PropTypes.func,
  deleteReservation: PropTypes.func,
};

export default Reservation;
