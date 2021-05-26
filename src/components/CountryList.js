import Country from "components/Country";
import { useSelector } from "react-redux";

const CountryList = () => {
  const countryList = useSelector((state) => state.countryList);

  return (
    <>
      <h3>All countries</h3>
      {countryList.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </>
  );
};

export default CountryList;
