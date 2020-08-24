import React from "react";
import Person from "./Person";
const Persons = ({ persons, newSearchParam }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newSearchParam.toLowerCase())
        )
        .map((person) => (
          <Person person={person} key={person.name} />
        ))}
    </ul>
  );
};

export default Persons;
