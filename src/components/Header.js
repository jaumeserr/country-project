import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "assets/logo.svg";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #4d4d4d;
  box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
  .logo {
    flex: 1;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 10px;
    }
  }
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 70px;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  color: #4d4d4d;
  text-decoration: none;
  display: flex;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <LinkStyled to="/" className="logo">
          <img src={Logo} alt="collaborative project" />
        </LinkStyled>
        <ul>
          <li>
            <LinkStyled to="/favourites">Favs</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/signin">Sign In</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/signup">Sign Up</LinkStyled>
          </li>
        </ul>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
