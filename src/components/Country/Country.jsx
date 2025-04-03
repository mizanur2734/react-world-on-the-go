import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(handleVisitedCountries);
  const handleVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name:{country.name.common}</h3>
      <img src={country.flags?.png} alt="" />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <h3>Population: {country.population}</h3>
      <button
        className={visited ? "btn-visited" : "not-btn-visited"}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Add visited Flag
      </button>
    </div>
  );
};

export default Country;
