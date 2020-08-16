import React from "react";
import ShowCountry from "./ShowCountry";

const Countries = ({ filteredCountries }) => {
  return filteredCountries.map((country) => {
    return (
      <>
        <div key={country.alpha2Code}>
          {country.name} <ShowCountry country={country} />
        </div>
      </>
    );
  });
};

export default Countries;
