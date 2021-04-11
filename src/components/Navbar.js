import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div className="nvb-div">
      <button onClick={() => setPage("planets")} className="nav-btn">
        Planets
      </button>
      <button onClick={() => setPage("people")} className="nav-btn">
        People
      </button>
    </div>
  );
};

export default Navbar;
