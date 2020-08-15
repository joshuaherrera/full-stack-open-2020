import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("Add a name...");
  const [newNumber, setNewNumber] = useState("Add a number...");
  const [newSearchParam, setNewSearchParam] = useState("");

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

    const nameExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExists !== undefined) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const personObj = {
        name: newName,
        number: newNumber !== "Add a number..." ? newNumber : "",
      };
      setPersons(persons.concat(personObj));
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
      <Persons persons={persons} newSearchParam={newSearchParam} />
    </div>
  );
};

export default App;
