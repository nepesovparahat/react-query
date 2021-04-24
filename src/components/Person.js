import React from "react";

const Person = ({ person }) => {
  return (
    <div className="person-item">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender} </p>
      <p>Birth Year - {person.birth_year} </p>
    </div>
  );
};

export default Person;
