import { useState, useEffect } from "react";
import getCountries from "services/getCountries";
import Country from "components/Country";
import { useSelector, useDispatch } from "react-redux";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const countryListByRegion = useSelector((state) => state.countryListByRegion);
  const dispatch = useDispatch();
  console.log("estado global: ", countryListByRegion);

  useEffect(() => {
    getCountries().then((country) => {
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: country,
      });
      setCountries(country);
    });
  }, [dispatch]);

  const handleChange = (evt) => {
    console.log(evt);
    dispatch({
      type: "GET_COUNTRIES_BY_REGION",
      payload: evt.target.value,
    });
  };

  return (
    <div>
      <h3>
        Filter by Region
        {countryListByRegion.length === 0 ? null : ` (${countryListByRegion.length})`}
      </h3>
      <select onChange={handleChange}>
        <option value="">Filter by</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
      </select>
      {countryListByRegion.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
