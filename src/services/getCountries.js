export default function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const countryData = data.map((country) => {
        return {
          ...country,
          isFavourite: false,
        };
      });
      console.log(
        "🚀 ~ file: getCountries.js ~ line 11 ~ countryData ~ countryData",
        countryData
      );
      return countryData;
    });
}
