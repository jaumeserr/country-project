import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  countryList: [],
  countryListByRegion: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      console.log('set countries');
      return { ...state, countryList: action.payload };
    case "GET_COUNTRIES_BY_REGION":
      console.log('filter by region');
      const countryListByRegion = state.countryList.filter(
        (item) => item.region === action.payload
      );
      return { ...state, countryListByRegion };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
