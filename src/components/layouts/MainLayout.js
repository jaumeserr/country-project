import styled from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";
import InputSearch from "components/InputSearch";
import { Fragment } from "react";

const ContentStyled = styled.main`
  min-height: calc(100vh - 36px);
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
`;

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section>
        <InputSearch />
      </section>
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
