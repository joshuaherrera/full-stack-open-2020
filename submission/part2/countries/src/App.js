import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import Country from "./components/Country";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchParam, setSearchParam] = useState("United States of America");

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
      // console.log(res.data[0]);
    });
  };

  useEffect(hook, []);

  const handleParamChange = (event) => {
    setSearchParam(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchParam.toLowerCase())
  );
  return (
    <div className="App">
      <FilterCountries
        searchParam={searchParam}
        handleParamChange={handleParamChange}
      />

      {filteredCountries.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : filteredCountries.length === 1 ? (
        <div>
          <Country country={filteredCountries[0]} />
        </div>
      ) : (
        <Countries filteredCountries={filteredCountries} />
      )}
    </div>
  );
};

export default App;
