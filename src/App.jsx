import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { store } from "./utils/store";

function App() {
  return <>
  <div>
    <Navbar/>
    <Dashboard/>
  </div>
  </>;
}

export default App;
