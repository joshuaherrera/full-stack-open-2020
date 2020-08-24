import React from "react";

const Person = ({ person }) => {
  return (
    <>
      <li>
        {person.name} {person.number}
      </li>
      <button>Delete</button>
    </>
  );
};

export default Person;
