import styled from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";

const ContentStyled = styled.main`
  min-height: calc(100vh - 36px);
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 20px;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </>
  );
};

export default MainLayout;
