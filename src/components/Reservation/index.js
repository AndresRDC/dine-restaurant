import React, { useEffect, useState } from "react";
import "./index.css";
import ReservationForm from "../ReservationForm";
import ReservationDetail from "../ReservationDetail";
import useLocalStorage from "../../hooks/useLocalStorage";

function Reservation() {
  const dateTimeReviver = (key, value) =>
    key === "dateTime" ? new Date(value) : value;
  const [reservation, setReservation] = useLocalStorage(
    "reservation",
    null,
    dateTimeReviver
  );
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // delete expired reservation
    if (reservation && reservation.dateTime < new Date()) {
      setReservation(null);
    }
  }, [reservation, setReservation]);

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
      <div className="container">
        <div className="reservation__container">
          {(!reservation || editMode) && (
            <ReservationForm
              reservation={reservation}
              onSave={saveReservation}
            />
          )}
          {reservation && !editMode && (
            <ReservationDetail
              reservation={reservation}
              deleteReservation={deleteReservation}
              enableEditMode={enableEditMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservation;
