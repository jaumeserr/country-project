export default function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const countryData = data.map((country) => {
        return country
      });
      return countryData;
    });
}