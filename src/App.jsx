import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { store } from "./utils/store";

function App() {
  const [searchItem ,setSearchItem] =useState();
  return <>
  <div>
    <Navbar onSearch={setSearchItem}/>
    <Dashboard searchItem={searchItem}/>
  </div>
  </>;
}

export default App;
