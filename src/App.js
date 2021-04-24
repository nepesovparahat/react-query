import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Peoples from "./components/Persons";
import Planets from "./components/Planets";
import "./App.css";
import { useTransition, animated, config } from "@react-spring/web";

const App = () => {
  const [page, setPage] = useState("planets");
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!show),
  });

  return (
    <div className="App">
      <div className="title">{transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <h1>Star Wars</h1>
            </animated.div>
          )
      )}</div>
      <Navbar setPage={setPage} />
      <div className="content-div">
        {page === "planets" ? <Planets /> : <Peoples />}
      </div>
    </div>
  );
};

export default App;
