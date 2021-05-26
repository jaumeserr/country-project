import styled from "styled-components";
import { Delete } from "@styled-icons/typicons";
import { Search } from "@styled-icons/octicons";

import { useDispatch } from "react-redux";
import { useState } from "react";

const InputStyled = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background-color: white;
  padding: 10px 35px 10px 10px;
  position: relative;
  align-items: center;
  label {
    display: flex;
  }
  input {
    width: 100%;
    outline: 0;
    border: none;
    padding-left: 10px;
    font-family: 'Philosopher', sans-serif;
    font-size: 15px;
  }
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
  }
`;

const ClearStyled = styled(Delete)`
  color: black;
  width: 20px;
  cursor: pointer;
`;

const SearchStyled = styled(Search)`
  color: black;
  width: 20px;
`;

const InputSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [clear, setClear] = useState(false);

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
