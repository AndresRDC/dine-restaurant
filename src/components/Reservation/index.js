import React, { useState } from "react";
import "./index.css";
import ReservationForm from "../ReservationForm";
import ReservationDetail from "../ReservationDetail";

function Reservation(props) {
  const [reservation, setReservation] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const saveReservation = (reservation) => {
    setReservation(reservation);
    setEditMode(false);
  };
  const deleteReservation = () => {
    setReservation(null);
  };
  const enableEditMode = () => {
    setEditMode(true);
  };
  return (
    <div className="reservation">
      {(!reservation || editMode) && (
        <ReservationForm reservation={reservation} onSave={saveReservation} />
      )}
      {reservation && !editMode && (
        <ReservationDetail
          reservation={reservation}
          deleteReservation={deleteReservation}
          enableEditMode={enableEditMode}
        />
      )}
    </div>
  );
}

export default Reservation;
