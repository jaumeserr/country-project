export default function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const countryData = data.map((country) => {
        const { name, capital, population, flag, alpha3Code, region } = country;
        return { name, capital, population, flag, alpha3Code, region };
      });
      return countryData;
    });
}