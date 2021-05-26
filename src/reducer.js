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

export default reducer;