import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Peoples from "./components/Peoples";
import Planets from "./components/Planets";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content-div">
        {page === "planets" ? <Planets /> : <Peoples />}
      </div>
    </div>
  );
};

export default App;
