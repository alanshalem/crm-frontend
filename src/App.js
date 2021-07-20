import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./views/Dashboard/Dashboard";

// import { Entry } from "./views/Entry/Entry";

function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <DefaultLayout>
        {/* SEND PAGE COMPONENT */}
        <Dashboard></Dashboard>
      </DefaultLayout>
    </div>
  );
}

export default App;
