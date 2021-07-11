import React, { useEffect, useState } from "react";
import "./index.css";
import ReservationForm from "../ReservationForm";
import ReservationDetail from "../ReservationDetail";

function Reservation(props) {
  const [reservation, setReservation] = useState(null);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    const loadReservation = () => {
      let reservation = JSON.parse(localStorage.getItem("reservation"));
      if (reservation) {
        reservation.dateTime = new Date(reservation.dateTime);
      }
      setReservation(reservation);
    };
    loadReservation();
  }, []);

  const saveReservation = (reservation) => {
    localStorage.setItem("reservation", JSON.stringify(reservation));
    setReservation(reservation);
    setEditMode(false);
  };
  const deleteReservation = () => {
    localStorage.removeItem("reservation");
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
