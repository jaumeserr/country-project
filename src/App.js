import "./App.css";
import { useEffect } from "react";
import getCountries from "services/getCountries";
import { useSelector, useDispatch } from "react-redux";
import Country from "components/Country";
import Filters from "components/Filters";

function App() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => {
    if(state.countryListByRegion.length !== 0) {
      return state.countryListByRegion
    }
    if(state.countryListByName.length !== 0) {
      return state.countryListByName
    }
    return state.countryList
  });

  useEffect(() => {
    getCountries().then((country) => {
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: country,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>This is my flag app</h2>
        <Filters />
        {countryList.map((country) => (
          <Country key={country.alpha3Code} {...country} />
        ))}
      </header>
    </div>
  );
}

export default App;
