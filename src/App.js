import "./App.css";
import TicketList from "./views/TicketList/TicketList";
import DefaultLayout from "./layout/DefaultLayout";
import { Entry } from "./views/Entry/Entry";
import Dashboard from "./views/Dashboard/Dashboard";
import AddTicket from "./views/AddTicket/AddTicket";
import Ticket from "./views/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <DefaultLayout>
        {/* SEND PAGE COMPONENT */}
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
