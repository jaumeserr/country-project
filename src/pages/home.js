import "../App.css";
import { useEffect } from "react";
import getCountries from "services/getCountries";
import { useDispatch } from "react-redux";
import Filters from "components/Filters";
import CountryList from "components/CountryList";

import MainLayout from "components/layouts/MainLayout";

const HomePage = () => {
  const dispatch = useDispatch();

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
    <MainLayout>
      <h2>This is my flag app</h2>
      <Filters />
      <CountryList />
    </MainLayout>
  );
};

export default HomePage;
