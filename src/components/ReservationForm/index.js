import React, { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Button from "../Button";

function ReservationForm({ onSave, reservation }) {
  //date functions
  const getDateLocalISO = (date) => {
    const tzoffset = beginDate.getTimezoneOffset() * 60000; //timezone offset in milliseconds
    return new Date(date - tzoffset).toISOString().slice(0, -1);
  };
  const getDateFromDateLocalISO = (dateLocalISO) => {
    return dateLocalISO.substr(0, 10);
  };
  const getTimeFromDateLocalISO = (dateLocalISO) => {
    return dateLocalISO.substr(11, 5);
  };
  //min date time
  let beginDate = new Date();
  beginDate.setDate(beginDate.getDate() + 1);
  const startDate = getDateFromDateLocalISO(getDateLocalISO(beginDate));
  //max date time
  let limitDate = new Date();
  limitDate.setDate(limitDate.getDate() + 30);
  const endDate = getDateFromDateLocalISO(getDateLocalISO(limitDate));
  //time
  const startTime = "12:00";
  const endTime = "23:00";
  //init
  let reservationDate = null;
  let reservationTime = null;
  if (reservation?.dateTime) {
    const datelocalISO = getDateLocalISO(reservation.dateTime);
    reservationDate = getDateFromDateLocalISO(datelocalISO);
    reservationTime = getTimeFromDateLocalISO(datelocalISO);
  }
  const [formReservation, setFormReservation] = useState({
    name: reservation?.name || "",
    email: reservation?.email || "",
    date: reservationDate || startDate,
    time: reservationTime || startTime,
    quantity: reservation?.quantity || 1,
  });
  const { name, email, date, time, quantity } = formReservation;

  const onSubmit = (e) => {
    e.preventDefault();
    const dateTime = new Date(date + " " + time);
    onSave({ name, email, dateTime, quantity: +quantity });
  };

  const handleInputChange = ({ target }) => {
    setFormReservation({ ...formReservation, [target.name]: target.value });
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
        onChange={handleInputChange}
        required
      />
      <input
        className="reservation-form__input"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          min={startTime}
          max={endTime}
          required
        />
      </div>
      <select
        name="quantity"
        id="people"
        className="reservation-form__input"
        value={quantity}
        onChange={handleInputChange}
      >
        <option value="1">1 person</option>
        <option value="2">2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
      </select>
      <Button type="submit" size="full">
        Make reservation
      </Button>
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
