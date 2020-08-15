import React from "react";

const Filter = ({ handleParamChange }) => {
  return (
    <div>
      filter shown with: <input onChange={handleParamChange} />
    </div>
  );
};

export default Filter;
