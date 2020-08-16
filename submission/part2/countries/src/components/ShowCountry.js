import React, { useState } from "react";
import Country from "./Country";

const ShowCountry = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <>
      <button onClick={handleClick}>show</button>
      <div>{show ? <Country country={country} /> : ""}</div>
    </>
  );
};

export default ShowCountry;
