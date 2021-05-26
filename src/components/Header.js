import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: red;
  display: flex;
  .logo {
    flex: 1;
  }
  ul {
    list-style: none;
    display: flex;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/" className="logo">
        Collaborative Flag Project
      </Link>
      <ul>
        <li>
          <Link to="/favourites">Favs</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
