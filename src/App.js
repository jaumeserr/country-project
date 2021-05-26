import "./App.css";
import { useEffect } from "react";
import getCountries from "services/getCountries";
import { useSelector, useDispatch } from "react-redux";
import Select from "components/Select";
import CountryListByRegion from "components/CountryListByRegion";
import CountryList from "components/CountryList";

function App() {
  const dispatch = useDispatch();
  const countryListByRegion = useSelector((state) => state.countryListByRegion);

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
        <Select />
        {countryListByRegion.length === 0 ? (
          <CountryList />
        ) : (
          <CountryListByRegion />
        )}
      </header>
    </div>
  );
}

export default App;
