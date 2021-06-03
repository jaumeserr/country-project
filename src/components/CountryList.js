import { useSelector } from "react-redux";
import Country from "components/Country";

const CountryList = () => {
  const countryList = useSelector((state) => {
    if (state.countryListByRegion.length !== 0) {
      return state.countryListByRegion;
    }
    if (state.countryListByName.length !== 0) {
      return state.countryListByName;
    }
    return state.countryList;
  });

  return (
    <>
      {countryList.length !== 0 ? (
        countryList.map((country, index) => (
          <Country key={index} {...country} />
        ))
      ) : (
        <div>Data not found</div>
      )}
    </>
  );
};

export default CountryList;
