const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      return { ...state, countryList: action.payload };
    case "GET_COUNTRIES_BY_REGION":
      const countryListByRegion = state.countryList.filter(
        (item) => item.region === action.payload
      )
      return { ...state, countryListByRegion };
    case "GET_COUNTRY_BY_NAME":
      const countryListByName = state.countryList.filter(({ name }) =>
        name.toLowerCase().startsWith(action.payload)
      );
      return { ...state, countryListByName };
    default:
      return state;
  }
}

export default reducer;
