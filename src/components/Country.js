import styled from "styled-components";

const CountryStyled = styled.article`
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  color: black;
  font-weight: normal;
  line-height: 1.5;
  overflow: hidden;
  text-align: center;
  background-color: white;

  .image {
    height: 150px;
    background-size: cover;
    background-position: center;
    display: block;
    width: 100%;
  }
`;

const CountryContentStyled = styled.div`
  padding: 15px;
`;

const Country = ({ name, capital, population, flag, region }) => {
  return (
    <CountryStyled>
      <div className='image' style={{ backgroundImage: `url(${flag})`}}></div>
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
