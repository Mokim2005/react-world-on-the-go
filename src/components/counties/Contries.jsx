import React, { use, useState } from "react";
import Country from "../Country/Country";
import './countries.css'
const Contries = ({ contriesPromise }) => {
  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
  const [visitedCountry, setVisitedCountry] = useState([])

const handleVisitedCountries = (country) => {
    console.log('clicked', country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
}  
  return (
    <div>
      <h1>In the Conuntries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountry.length}</h3>
      <ol>
        {
          visitedCountry.map(country => <li> key={country.cca3.cca3} {country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Contries;