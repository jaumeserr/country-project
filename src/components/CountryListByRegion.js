import { useSelector } from "react-redux";
import Country from "components/Country";

const CountryListByRegion = () => {
  const countryListByRegion = useSelector((state) => state.countryListByRegion);

  return (
    <>
      <h3>Filtered Countries</h3>
      {countryListByRegion.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </>
  );
};

export default CountryListByRegion;
