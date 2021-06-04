import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDYG0eu1A2jLJRPoVrK-UWF7h5pula-FHI",
  authDomain: "country-project-5dd9b.firebaseapp.com",
  projectId: "country-project-5dd9b",
  storageBucket: "country-project-5dd9b.appspot.com",
  messagingSenderId: "590945751857",
  appId: "1:590945751857:web:d3d6d55d4eb5871f47d610",
  measurementId: "G-YCQBL49K6W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const initialState = {
  countryList: [],
  countryListByRegion: [],
  countryListByName: [],
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
