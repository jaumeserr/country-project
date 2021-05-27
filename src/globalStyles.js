import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Philosopher', sans-serif;
  }
  body{
    background-color: #e8e8e8;
  }
`;

export default GlobalStyle;
