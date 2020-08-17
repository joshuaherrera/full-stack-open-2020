import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});

  // https://weatherstack.com/quickstart
  const weatherKey = process.env.REACT_APP_API_KEY;
  const params = {
    access_key: weatherKey,
    query: country.name,
  };
  const hook = () => {
    axios.get("http://api.weatherstack.com/current", { params }).then((res) => {
      setWeather(res.data.current);
    });
  };

  useEffect(hook, []);
  return (
    <>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Language(s)</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Flag" width="275" height="200" />
      <div>
        <h3>Weather in {country.name}</h3>
        <div>
          <b>temperature: </b>
          {weather.temperature}° C
        </div>
        <div>
          <img src={weather.weather_icons} alt="Flag" width="50" height="50" />
        </div>
        <div>
          <b>wind: </b>
          {weather.wind_speed} kmh direction {weather.wind_dir}
        </div>
      </div>
    </>
  );
};

export default Country;
