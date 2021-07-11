import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ViewReservation from "./components/ViewReservation";
import ViewHome from "./components/ViewHome";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/reservation">
            <ViewReservation />
          </Route>
          <Route path="/">
            <ViewHome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
