import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch({
      type: "GET_COUNTRY_BY_NAME",
      payload: evt.target.value,
    });
  };

  return <input type="text" onChange={handleChange} />;
};

export default Input;
