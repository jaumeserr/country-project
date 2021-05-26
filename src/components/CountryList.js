import Country from "components/Country";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CountryList = () => {
  const countryList = useSelector((state) => {
    if(state.countryListByRegion.length !== 0) {
      return state.countryListByRegion
    }
    if(state.countryListByName.length !== 0) {
      return state.countryListByName
    }
    return state.countryList
  });

  return (
    <>
      {countryList.map((country) => (
        <Link to={`/country/${country.alpha3Code}`}>
          <Country key={country.alpha3Code} {...country} />
        </Link>
      ))}
    </>
  );
};

export default CountryList;
