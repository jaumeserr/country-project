import styled from "styled-components";
import LinkStyled from "./UI";
import { Heart, HeartFill } from "styled-icons/bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const CountryStyled = styled.article`
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  color: black;
  font-weight: normal;
  line-height: 1.5;
  overflow: hidden;
  text-align: center;
  background-color: white;
  position: relative;

  .image {
    height: 175px;
    background-size: cover;
    background-position: center;
  }
`;

const CountryContentStyled = styled.div`
  padding: 15px;
  min-height: 180px;
`;

const HeartStyled = styled(Heart)`
  color: black;
  width: 25px;
  position: absolute;
  bottom: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const HeartFillStyled = styled(HeartFill)`
  fill: red;
  width: 25px;
  position: absolute;
  bottom: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Country = ({
  name,
  capital,
  population,
  flag,
  region,
  alpha3Code,
}) => {
  const countryList = useSelector((state) => state.countryList);
  const [fav, setFav] = useState(false)

  return (
    <CountryStyled>
      <button>Favs</button>
      <LinkStyled key={alpha3Code} to={`/country/${alpha3Code}`}>
        <div
          className="image"
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
      </LinkStyled>
      <CountryContentStyled>
        <h2>{name}</h2>
        <h4>
          <strong>capital:</strong> {capital}
        </h4>
        <h4>
          <strong>population:</strong> {population}
        </h4>
        <h4>
          <strong>region:</strong> {region}
        </h4>
      </CountryContentStyled>
    </CountryStyled>
  );
};

export default Country;
