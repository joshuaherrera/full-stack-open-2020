import React from "react";
import phonebookService from "../services/phonebook";

const Person = ({ person, setPersonsHandler }) => {
  return (
    <>
      <li>
        {person.name} {person.number}
      </li>
      <button
        onClick={() => {
          const msg = "Delete " + person.name + "?";
          if (window.confirm(msg)) {
            phonebookService.deleteRec(person.id).then(() => {
              // uses 'hook' function from App.js to reload state
              setPersonsHandler();
            });
          }
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Person;
