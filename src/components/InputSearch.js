import styled from "styled-components";
import { Delete } from "@styled-icons/typicons";
import { Search } from "@styled-icons/octicons";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const InputStyled = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding: 10px 35px 10px 10px;
  position: relative;
  width: 300px;
  
  label {
    display: flex;
  }
  
  input {
    border: none;
    font-size: 15px;
    outline: 0;
    padding-left: 10px;
    width: 100%;
  }
  
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const ClearStyled = styled(Delete)`
  color: black;
  cursor: pointer;
  width: 20px;
`;

const SearchStyled = styled(Search)`
  color: black;
  width: 20px;
`;

const InputSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [clear, setClear] = useState(false);
  const countries = useSelector(state => state.countryList)

  const handleChange = (evt) => {
    setValue(evt.target.value);
    setClear(true);
    dispatch({
      type: "GET_COUNTRY_BY_NAME",
      payload: evt.target.value,
    });
  };

  const clearInput = () => {
    setValue("");
    dispatch({
      type: "CLEAR_COUNTRY_FILTERS",
      payload: [],
    });
  };

  return (
    <InputStyled>
      <label>
        <SearchStyled />
        <input placeholder="enter country..." type="text" onChange={handleChange} value={value} />
      </label>
      <button onClick={clearInput}>{value ? <ClearStyled /> : null}</button>
    </InputStyled>
  );
};

export default InputSearch;
