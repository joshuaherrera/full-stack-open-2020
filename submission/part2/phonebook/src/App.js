import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("Add a name...");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
    };
    setPersons(persons.concat(personObj));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>debug: {newName}</div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
