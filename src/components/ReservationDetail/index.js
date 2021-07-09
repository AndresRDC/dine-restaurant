import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function ReservationDetail({ reservation, deleteReservation, enableEditMode }) {
  const { dateTime, name, email, quantity } = reservation;
  const tzoffset = dateTime.getTimezoneOffset() * 60000; //offset in milliseconds
  const datelocalISO = new Date(dateTime - tzoffset).toISOString().slice(0, -1);
  const date = datelocalISO.substr(0, 10);
  const time = datelocalISO.substr(11, 5);

  return (
    <div className="card-reservation">
      <div className="card-reservation__header">
        <h2 className="card-reservation__title">You have a reservation</h2>
      </div>
      <div className="card-reservation__body">
        <p className="card-reservation__text">Name: {name}</p>
        <p className="card-reservation__text">Email: {email}</p>
        <p className="card-reservation__text">Fecha: {date}</p>
        <p className="card-reservation__text">Time: {time}</p>
        <p className="card-reservation__text">
          {quantity > 1 ? "People:" : "Person:"} {quantity}
        </p>
      </div>
      <input
        type="button"
        className="btn-edit"
        value="Edit"
        onClick={() => {
          enableEditMode();
        }}
      />
      <input
        type="button"
        className="btn-delete"
        value="Delete"
        onClick={() => {
          deleteReservation();
        }}
      />
    </div>
  );
}

ReservationDetail.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
  deleteReservation: PropTypes.func,
  enableEditMode: PropTypes.func,
};

export default ReservationDetail;
