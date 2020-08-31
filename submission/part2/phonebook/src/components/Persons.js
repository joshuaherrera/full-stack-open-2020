import React from "react";
import Person from "./Person";

const Persons = ({ persons, newSearchParam, setPersonsHandler }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newSearchParam.toLowerCase())
        )
        .map((person) => (
          <Person
            person={person}
            key={person.name}
            setPersonsHandler={setPersonsHandler}
          />
        ))}
    </ul>
  );
};

export default Persons;
