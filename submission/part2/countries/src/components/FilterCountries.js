import React from "react";

const FilterCountries = ({ searchParam, handleParamChange }) => {
  return (
    <div>
      Find countries: <input value={searchParam} onChange={handleParamChange} />
    </div>
  );
};

export default FilterCountries;
