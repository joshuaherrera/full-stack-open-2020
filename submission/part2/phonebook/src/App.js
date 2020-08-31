import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Add a name...");
  const [newNumber, setNewNumber] = useState("Add a number...");
  const [newSearchParam, setNewSearchParam] = useState("");

  const refreshAllPersons = () => {
    phonebookService.getAll().then((people) => {
      setPersons(people);
    });
  };

  useEffect(refreshAllPersons, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleParamChange = (event) => {
    setNewSearchParam(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber !== "Add a number..." ? newNumber : "",
    };

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (existingPerson !== undefined) {
      const msg = `${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`;
      if (window.confirm(msg)) {
        // overwrite the old number
        phonebookService
          .update(existingPerson.id, personObj)
          .then((updatedPerson) => {
            refreshAllPersons();
          });
      }
    } else {
      phonebookService.create(personObj).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleParamChange={handleParamChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        newSearchParam={newSearchParam}
        setPersonsHandler={refreshAllPersons}
      />
    </div>
  );
};

export default App;
