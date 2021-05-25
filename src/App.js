import "./App.css";
import CountryList from "components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  countryList: [],
  countryListByRegion: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      console.log('action.payload: ', action.payload)
      return { ...state, countryList: action.payload };
    case 'GET_COUNTRIES_BY_REGION':
      const countryListByRegion = state.countryList.filter(item => item.region === action.payload)
      return {...state, countryListByRegion}
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CountryList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
