import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Add a name...");
  const [newNumber, setNewNumber] = useState("Add a number...");
  const [newSearchParam, setNewSearchParam] = useState("");
  const [message, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("success");

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
          })
          // person removed from server
          .catch((err) => {
            setMsgType("error");
            setTimeout(() => {
              setMsg(null);
            }, 5000);
            setMsg(
              `${existingPerson.name} has already been removed from the server`
            );
            // rm from state
            setPersons(persons.filter((p) => p.id !== existingPerson.id));
          });
        setTimeout(() => {
          setMsg(null);
        }, 5000);
        setMsgType("success");
        setMsg(`Updated ${existingPerson.name}`);
      }
    } else {
      phonebookService.create(personObj).then((addedPerson) => {
        // console.log(addedPerson.id);
        setPersons(persons.concat(addedPerson));
      });
      setTimeout(() => {
        setMsg(null);
      }, 5000);
      setMsgType("success");
      setMsg(`Added ${personObj.name}`);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} msgType={msgType} />
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
