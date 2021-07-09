import React, { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

//Date
let beginDate = new Date();
beginDate.setDate(beginDate.getDate() + 1);
const tzoffset = beginDate.getTimezoneOffset() * 60000; //offset in milliseconds
const startDatelocalISO = new Date(beginDate - tzoffset)
  .toISOString()
  .slice(0, -1);
const startDate = startDatelocalISO.substr(0, 10);
const startTime = "12:00";
let limitDate = new Date();
limitDate.setDate(limitDate.getDate() + 30);
const endDateLocalISO = new Date(limitDate - tzoffset)
  .toISOString()
  .slice(0, -1);
const endDate = endDateLocalISO.substr(0, 10);
const endTime = "23:00";

function ReservationForm({ onSave, reservation }) {
  let reservationDate = null;
  let reservationTime = null;
  if (reservation?.dateTime) {
    const dateTime = reservation.dateTime;
    const tzoffset = dateTime.getTimezoneOffset() * 60000; //offset in milliseconds
    const datelocalISO = new Date(dateTime - tzoffset)
      .toISOString()
      .slice(0, -1);
    reservationDate = datelocalISO.substr(0, 10);
    reservationTime = datelocalISO.substr(11, 5);
  }

  const [name, setName] = useState(reservation?.name || "");
  const [email, setEmail] = useState(reservation?.email || "");
  const [date, setDate] = useState(reservationDate || startDate);
  const [time, setTime] = useState(reservationTime || startTime);
  const [quantity, setQuantity] = useState(reservation?.quantity || 1);

  const onSubmit = (e) => {
    e.preventDefault();
    const dateTime = new Date(date + " " + time);
    onSave({ name, email, dateTime, quantity: +quantity });
  };
  return (
    <form className="reservation-form" onSubmit={onSubmit}>
      <input
        className="reservation-form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
      />
      <input
        className="reservation-form__input"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <div className="width100">
        <label htmlFor="date" className="reservation-form__label">
          Pick a date
        </label>
        <input
          className="reservation-form__input--with-label"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
          min={startDate}
          max={endDate}
          required
        />
      </div>
      <div className="width100">
        <label htmlFor="date" className="reservation-form__label">
          Pick a date
        </label>
        <input
          className="reservation-form__input--with-label"
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
          min={startTime}
          max={endTime}
          required
        />
      </div>
      <select
        name="people"
        id="people"
        className="reservation-form__input"
        value={quantity}
        onChange={({ target }) => setQuantity(target.value)}
      >
        <option value="1">1 person</option>
        <option value="2">2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
      </select>

      <input
        className="reservation-form__btn"
        type="submit"
        value="Make reservation"
      />
    </form>
  );
}
ReservationForm.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
  onSave: PropTypes.func.isRequired,
};

export default ReservationForm;
