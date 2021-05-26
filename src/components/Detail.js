import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Detail = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const countryList = useSelector((state) => state.countryList);

  const country = countryList.find((country) => country.alpha3Code === id);
  const { name, capital, population, flag } = country;

  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{capital}</p>
        <img src={flag} alt={name} />
        <p>{population}</p>
      </div>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default Detail;
