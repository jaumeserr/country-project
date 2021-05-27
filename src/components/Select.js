import styled from "styled-components";
import { useDispatch } from "react-redux";

const LabelStyled = styled.label`
  display: block;
`

const SelectStyled = styled.select`
  width: 300px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
`;

const Select = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch({
      type: "GET_COUNTRIES_BY_REGION",
      payload: evt.target.value,
    });
  };

  return (
    <div>
      <LabelStyled>Filter by region:</LabelStyled>
      <SelectStyled onChange={handleChange}>
        <option>All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Polar">Polar</option>
      </SelectStyled>
    </div>
  );
};

export default Select;
