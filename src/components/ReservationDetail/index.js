import PropTypes from "prop-types";
import "./index.css";
import Button from "../Button";
import {
  getDateFromDateLocalISO,
  getDateLocalISO,
  getTimeFromDateLocalISO,
} from "../../helpers/dateUtils";

function ReservationDetail({ reservation, onDelete, enableEditMode }) {
  const { dateTime, name, email, quantity } = reservation;
  const datelocalISO = getDateLocalISO(dateTime);
  const date = getDateFromDateLocalISO(datelocalISO);
  const time = getTimeFromDateLocalISO(datelocalISO);
  return (
    <article className="card-reservation">
      <header className="card-reservation__header">
        <h2 className="card-reservation__title">You have a reservation</h2>
      </header>
      <div className="card-reservation__body">
        <p className="card-reservation__property">Name: {name}</p>
        <p className="card-reservation__property">Email: {email}</p>
        <p className="card-reservation__property">Fecha: {date}</p>
        <p className="card-reservation__property">Time: {time}</p>
        <p className="card-reservation__property">
          {quantity > 1 ? "People:" : "Person:"} {quantity}
        </p>
      </div>
      <footer>
        <Button
          className="btn-edit"
          fill="outline"
          color="warning"
          fontColor="warning"
          size="default"
          onClick={() => {
            enableEditMode();
          }}
        >
          Edit
        </Button>
        <Button
          className="btn-delete"
          fill="outline"
          fontColor="danger"
          color="danger"
          onClick={() => {
            onDelete();
          }}
        >
          Delete
        </Button>
      </footer>
    </article>
  );
}

ReservationDetail.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
  onDelete: PropTypes.func,
  enableEditMode: PropTypes.func,
};

export default ReservationDetail;
