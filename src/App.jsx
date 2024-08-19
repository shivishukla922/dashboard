import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { store } from "./utils/store";
import { Dash } from "./Dash";

function App() {
  const [searchItem, setSearchItem] = useState();
  return (
    <>
      <div>
        <Navbar onSearch={setSearchItem} />
        <Dash />
        <Dashboard searchItem={searchItem} />
      </div>
    </>
  );
}

export default App;
