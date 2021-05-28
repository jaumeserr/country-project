import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Country from "components/Country";
import LinkStyled from './UI'
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
          <LinkStyled key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            <Country {...country} />
          </LinkStyled>
        ))
      ) : (
        <div>Data not found</div>
      )}
    </>
  );
};

export default CountryList;
