import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ViewReservation from "./components/ViewReservation";
import ViewHome from "./components/ViewHome";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";

const dateTimeReviver = (key, value) =>
  key === "dateTime" ? new Date(value) : value;

function App() {
  const [reservation, setReservation] = useLocalStorage(
    "reservation",
    null,
    dateTimeReviver
  );

  useEffect(() => {
    // delete expired reservation
    if (reservation && reservation.dateTime < new Date()) {
      setReservation(null);
    }
  }, [reservation, setReservation]);

  const saveReservation = (reservation) => {
    setReservation(reservation);
  };
  const deleteReservation = () => {
    setReservation(null);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route path="/reservation">
            <ViewReservation
              reservation={reservation}
              saveReservation={saveReservation}
              deleteReservation={deleteReservation}
            />
          </Route>
          <Route path="/">
            <ViewHome reservation={reservation} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
