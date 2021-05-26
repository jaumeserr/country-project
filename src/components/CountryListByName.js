import { useSelector } from "react-redux";
import Country from "components/Country";

const CountryListByName = () => {
  const countryListByName = useSelector((state) => state.countryListByName);
  console.log("🚀 ~ file: CountryListByName.js ~ line 6 ~ countryListByName ~ countryListByName", countryListByName)

  return (
    <>
      <h3>Filtered Countries</h3>
      {countryListByName.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </>
  );
};

export default CountryListByName;
