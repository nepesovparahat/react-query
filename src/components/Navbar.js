import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div className="nvb-div">
      <button onClick={() => setPage("planets")} className="nav-btn">
        Planets
      </button>
      <button onClick={() => setPage("pereson")} className="nav-btn">
        Persons
      </button>
    </div>
  );
};

export default Navbar;
