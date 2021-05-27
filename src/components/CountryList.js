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
      {countryList.length !== 0 ? (
        countryList.map((country) => (
          <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            <Country key={country.alpha3Code} {...country} />
          </Link>
        ))
      ) : (
        <div>Data not found</div>
      )}
    </>
  );
};

export default CountryList;
