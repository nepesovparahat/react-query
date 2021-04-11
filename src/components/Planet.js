import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="planet-item">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
