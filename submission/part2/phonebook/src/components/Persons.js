import React from "react";

const Persons = ({ persons, newSearchParam }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newSearchParam.toLowerCase())
        )
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
    </ul>
  );
};

export default Persons;
