import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import TicketList from "./views/TicketList/TicketList";
import DefaultLayout from "./layout/DefaultLayout";
import { Entry } from "./views/Entry/Entry";
import Dashboard from "./views/Dashboard/Dashboard";
import AddTicket from "./views/AddTicket/AddTicket";
import Ticket from "./views/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addticket">
            <AddTicket />
          </PrivateRoute>

          <PrivateRoute path="/ticketlist">
            <TicketList />
          </PrivateRoute>

          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
