import { useState, useEffect } from "react";
import getCountries from "services/getCountries";
import Country from "components/Country"

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((country) => setCountries(country));
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
