import styled from "styled-components";
import { useDispatch } from "react-redux";

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
    <SelectStyled onChange={handleChange}>
      <option value="">Filter by</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Americas">Americas</option>
      <option value="Oceania">Oceania</option>
      <option value="Africa">Africa</option>
    </SelectStyled>
  );
};

export default Select;
